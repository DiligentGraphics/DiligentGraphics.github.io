import os
import re
import subprocess
import shutil

DILIGENT_ENGINE_URL = 'https://github.com/DiligentGraphics/DiligentEngine.git'
SOURCE_IMAGES = 'images'
SOURCE_TEMPLATE = 'template'
SOURCE_BUILD = 'DiligentEngine/build/Emscripten/DiligentSamples'
DESTINATION_DIR = 'BuildArtifacts'
BUILD_TARGETS = [
    "Tutorial01_HelloTriangle",
    "Tutorial02_Cube",
    "Tutorial03_Texturing",
    "Tutorial04_Instancing",
    "Tutorial05_TextureArray",
    "Tutorial06_Multithreading",
    "Tutorial09_Quads",
    "Tutorial10_DataStreaming",
    "Tutorial11_ResourceUpdates",
    "Tutorial12_RenderTarget",
    "Tutorial13_ShadowMap",
    "Tutorial14_ComputeShader",
    "Tutorial16_BindlessResources",
    "Tutorial17_MSAA",
    "Tutorial18_Queries",
    "Tutorial19_RenderPasses",
    "Tutorial26_StateCache",
    "Tutorial27_PostProcessing",

    "Atmosphere",
    "ImguiDemo",
    "Shadows"
]

def extract_repoitory_name(repository_url):
    match = re.search(r'/([^/]+?)(\.git)?$', repository_url)
    if match:
        return match.group(1)
    else:
        raise ValueError(f"Invalid repository URL: {repository_url}")

def clone_repository(repository_url):
    try:
        repo_name = extract_repoitory_name(repository_url)
        target_dir = f"./{repo_name}"
        if os.path.exists(target_dir):
            print(f"Repository already cloned in '{target_dir}'. Skipping clone.")
        else:
            command = ["git", "clone", "--recursive", "--depth", "1", repository_url]
            subprocess.run(command, check=True)
    except subprocess.CalledProcessError as e:
        print(f"An error occurred while cloning the repository: {e}")
    except Exception as e:
        print(f"An unexpected error occurred: {e}")

def configure_project():
    try:
        command = ["emcmake", "cmake", "-S", "./DiligentEngine", "-B", "./DiligentEngine/build/Emscripten", "-DCMAKE_BUILD_TYPE=Release"]
        subprocess.run(command, check=True)
    except subprocess.CalledProcessError as e:
        print(f"An error occurred while configuring the project: {e}")
    except Exception as e:
        print(f"An unexpected error occurred: {e}")

def build_project():
    try:
        command = ["cmake", "--build", "./DiligentEngine/build/Emscripten"]
        subprocess.run(command, check=True)
    except subprocess.CalledProcessError as e:
        print(f"An error occurred while building the project: {e}")
    except Exception as e:
        print(f"An unexpected error occurred: {e}")

def upload_artefacts():
    if not os.path.exists(DESTINATION_DIR):
        os.makedirs(DESTINATION_DIR)

    shutil.copytree(SOURCE_IMAGES, os.path.join(DESTINATION_DIR, 'images'), dirs_exist_ok=True)
    for item in os.listdir(SOURCE_TEMPLATE):
        source_item = os.path.join(SOURCE_TEMPLATE, item)
        destination_item = os.path.join(DESTINATION_DIR, item)  # Corrected the destination path

        if os.path.isdir(source_item):
            shutil.copytree(source_item, destination_item, dirs_exist_ok=True)
        else:
            shutil.copy2(source_item, destination_item)

    for folder in BUILD_TARGETS:
        source_folder_path_tutorials = os.path.join(SOURCE_BUILD, "Tutorials", folder)
        source_folder_path_samples = os.path.join(SOURCE_BUILD, "Samples", folder)
        destination_folder_path = os.path.join(DESTINATION_DIR, "wasm-modules", folder)

        if os.path.exists(source_folder_path_tutorials):
            shutil.copytree(source_folder_path_tutorials, destination_folder_path, dirs_exist_ok=True)
        elif os.path.exists(source_folder_path_samples):
            shutil.copytree(source_folder_path_samples, destination_folder_path, dirs_exist_ok=True)
        else:
            print(f"Folder '{folder}' not found.")

if __name__ == '__main__':
    clone_repository(DILIGENT_ENGINE_URL)
    configure_project()
    build_project()
    upload_artefacts()
