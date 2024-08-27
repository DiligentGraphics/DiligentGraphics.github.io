import os
import re
import subprocess
import shutil
import requests
import sys
import argparse

DILIGENT_ENGINE_URL = 'https://github.com/DiligentGraphics/DiligentEngine.git'
SOURCE_IMAGES = 'images'
SOURCE_TEMPLATE = 'template'
GITHUB_REPOSITORY = 'DiligentGraphics/DiligentEngine'

def get_latest_successful_run_id(github_token):
    headers = {'Authorization': f'token {github_token}'}
    response = requests.get(f'https://api.github.com/repos/{GITHUB_REPOSITORY}/actions/runs', headers=headers)
    
    if response.status_code == 200:
        runs = response.json()['workflow_runs']
        
        successful_emscripten_runs = [
            run for run in runs 
            if run['conclusion'] == 'success' and run['name'] == 'Emscripten build' and run['event'] == 'push'
        ]
        
        if successful_emscripten_runs:
            latest_successful_run = max(successful_emscripten_runs, key=lambda run: run['created_at'])
            return latest_successful_run['id']
        else:
            print('No successful "Emscripten build" workflow runs triggered by "push" found.')
            return None
    else:
        print(f'Failed to fetch workflow runs: {response.content}')
        return None

def download_artifact(artifact_name, run_id, github_token, destination_dir):
    headers = {'Authorization': f'token {github_token}'}
    response = requests.get(f'https://api.github.com/repos/{GITHUB_REPOSITORY}/actions/runs/{run_id}/artifacts', headers=headers)
    
    if response.status_code == 200:
        artifacts = response.json()['artifacts']
        for artifact in artifacts:
            if artifact['name'] == artifact_name:
                download_url = artifact['archive_download_url']
                artifact_response = requests.get(download_url, headers=headers, stream=True)
              
                total_size = int(artifact_response.headers.get('content-length', 0))
                block_size = 1024 * 1024
                downloaded_size = 0
            
                if not os.path.exists(destination_dir):
                    os.makedirs(destination_dir)

                zip_path = os.path.join(destination_dir, f'{artifact_name}.zip')
                with open(zip_path, 'wb') as f:
                    for data in artifact_response.iter_content(block_size):
                        f.write(data)
                        downloaded_size += len(data)
                        
                        done = int(50 * downloaded_size / total_size)
                        sys.stdout.write(f'\rDownloading: [{"=" * done}{" " * (50 - done)}] {downloaded_size * 100 // total_size}%')
                        sys.stdout.flush()
                
                print(f'\nArtifact {artifact_name} downloaded successfully.')
                return True
        print(f'Artifact {artifact_name} not found.')
    else:
        print(f'Failed to fetch artifacts: {response.content}')
        return False

def extract_zip(zip_path, extract_to):
    import zipfile
    with zipfile.ZipFile(zip_path, 'r') as zip_ref:
        zip_ref.extractall(extract_to)
    os.remove(zip_path)

def upload_artefacts(destination_dir):
    if not os.path.exists(destination_dir):
        os.makedirs(destination_dir)

    shutil.copytree(SOURCE_IMAGES, os.path.join(destination_dir, 'images'), dirs_exist_ok=True)
    for item in os.listdir(SOURCE_TEMPLATE):
        source_item = os.path.join(SOURCE_TEMPLATE, item)
        destination_item = os.path.join(destination_dir, item)

        if os.path.isdir(source_item):
            shutil.copytree(source_item, destination_item, dirs_exist_ok=True)
        else:
            shutil.copy2(source_item, destination_item)

if __name__ == '__main__':
    parser = argparse.ArgumentParser(description='Download and manage GitHub Actions artifacts.')
    parser.add_argument('-t', '--github_token', help='GitHub token for authentication', required=True)
    parser.add_argument('-d', '--destination_dir', help='Destination directory for downloaded artifacts', required=True)
    args = parser.parse_args()

    github_token = args.github_token
    destination_dir = args.destination_dir

    run_id = get_latest_successful_run_id(github_token)
    if run_id:
        print(f"Download artifacts for Build ID: {run_id}")
        if download_artifact('WasmModules-DiligentGraphics.github.io', run_id, github_token, destination_dir):
            extract_zip(f'{destination_dir}/WasmModules-DiligentGraphics.github.io.zip', f'{destination_dir}/wasm-modules')
            upload_artefacts(destination_dir)
    else:
        print('Could not retrieve the latest run ID.')
