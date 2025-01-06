const tutorials = [
    {
        id: "Tutorial01_HelloTriangle",
        title: "01 - Hello Triangle",
        description: "This tutorial demonstrates the basics of Diligent Engine API. It shows how to create shaders, pipeline state object and how to render a simple triangle.",
        image: "images/content/tutorials/Tutorial01_HelloTriangle.png",
        tutorialLink: "wasm-modules/Tutorial01_HelloTriangle/Tutorial01_HelloTriangle.html",
        githubLink: "https://github.com/DiligentGraphics/DiligentSamples/tree/master/Tutorials/Tutorial01_HelloTriangle"
    },
    {
        id: "Tutorial02_Cube",
        title: "02 - Cube",
        description: "This tutorial demonstrates how to render an actual 3D object, a cube. It shows how to load shaders from files, create and use vertex, index and uniform buffers.",
        image: "images/content/tutorials/Tutorial02_Cube.gif",
        tutorialLink: "wasm-modules/Tutorial02_Cube/Tutorial02_Cube.html",
        githubLink: "https://github.com/DiligentGraphics/DiligentSamples/tree/master/Tutorials/Tutorial02_Cube"
    },
    {
        id: "Tutorial03_Texturing",
        title: "03 - Texturing",
        description: "This tutorial demonstrates how to apply a texture to a 3D object. It shows how to load a texture from file, create shader resource binding object and how to sample a texture in the shader.",
        image: "images/content/tutorials/Tutorial03_Texturing.gif",
        tutorialLink: "wasm-modules/Tutorial03_Texturing/Tutorial03_Texturing.html",
        githubLink: "https://github.com/DiligentGraphics/DiligentSamples/tree/master/Tutorials/Tutorial03_Texturing"
    },
    {
        id: "Tutorial04_Instancing",
        title: "04 - Instancing",
        description: "This tutorial demonstrates how to use instancing to render multiple copies of one object using unique transformation matrix for every copy.",
        image: "images/content/tutorials/Tutorial04_Instancing.gif",
        tutorialLink: "wasm-modules/Tutorial04_Instancing/Tutorial04_Instancing.html",
        githubLink: "https://github.com/DiligentGraphics/DiligentSamples/tree/master/Tutorials/Tutorial04_Instancing"
    },
    {
        id: "Tutorial05_TextureArray",
        title: "05 - Texture Array",
        description: "This tutorial demonstrates how to combine instancing with texture arrays to use unique texture for every instance.",
        image: "images/content/tutorials/Tutorial05_TextureArray.gif",
        tutorialLink: "wasm-modules/Tutorial05_TextureArray/Tutorial05_TextureArray.html",
        githubLink: "https://github.com/DiligentGraphics/DiligentSamples/tree/master/Tutorials/Tutorial05_TextureArray"
    },
    {
        id: "Tutorial06_Multithreading",
        title: "06 - Multithreading",
        description: "This tutorial shows how to generate command lists in parallel from multiple threads.",
        image: "images/content/tutorials/Tutorial06_Multithreading.gif",
        tutorialLink: "wasm-modules/Tutorial06_Multithreading/Tutorial06_Multithreading.html",
        githubLink: "https://github.com/DiligentGraphics/DiligentSamples/tree/master/Tutorials/Tutorial06_Multithreading"
    },
    {
        id: "Tutorial09_Quads",
        title: "09 - Quads",
        description: "This tutorial shows how to render multiple 2D quads, frequently switching textures and blend modes.",
        image: "images/content/tutorials/Tutorial09_Quads.gif",
        tutorialLink: "wasm-modules/Tutorial09_Quads/Tutorial09_Quads.html",
        githubLink: "https://github.com/DiligentGraphics/DiligentSamples/tree/master/Tutorials/Tutorial09_Quads"
    },
    {
        id: "Tutorial10_DataStreaming",
        title: "10 - Data Streaming",
        description: "This tutorial shows dynamic buffer mapping strategy using MAP_FLAG_DISCARD and MAP_FLAG_DO_NOT_SYNCHRONIZE flags to efficiently stream varying amounts of data to GPU.",
        image: "images/content/tutorials/Tutorial10_DataStreaming.gif",
        tutorialLink: "wasm-modules/Tutorial10_DataStreaming/Tutorial10_DataStreaming.html",
        githubLink: "https://github.com/DiligentGraphics/DiligentSamples/tree/master/Tutorials/Tutorial10_DataStreaming"
    },
    {
        id: "Tutorial11_ResourceUpdates",
        title: "11 - Resource Updates",
        description: "This tutorial demonstrates different ways to update buffers and textures in Diligent Engine and explains important internal details and performance implications related to each method.",
        image: "images/content/tutorials/Tutorial11_ResourceUpdates.gif",
        tutorialLink: "wasm-modules/Tutorial11_ResourceUpdates/Tutorial11_ResourceUpdates.html",
        githubLink: "https://github.com/DiligentGraphics/DiligentSamples/tree/master/Tutorials/Tutorial11_ResourceUpdates"
    },
    {
        id: "Tutorial12_RenderTarget",
        title: "12 - Render Target",
        description: "This tutorial demonstrates how to render a 3d cube into an offscreen render target and do a simple post-processing effect.",
        image: "images/content/tutorials/Tutorial12_RenderTarget.gif",
        tutorialLink: "wasm-modules/Tutorial12_RenderTarget/Tutorial12_RenderTarget.html",
        githubLink: "https://github.com/DiligentGraphics/DiligentSamples/tree/master/Tutorials/Tutorial12_RenderTarget"
    },
    {
        id: "Tutorial13_ShadowMap",
        title: "13 - Shadow Map",
        description: "This tutorial demonstrates how to render basic shadows using a shadow map.",
        image: "images/content/tutorials/Tutorial13_ShadowMap.gif",
        tutorialLink: "wasm-modules/Tutorial13_ShadowMap/Tutorial13_ShadowMap.html",
        githubLink: "https://github.com/DiligentGraphics/DiligentSamples/tree/master/Tutorials/Tutorial13_ShadowMap"
    },
    {
        id: "Tutorial14_ComputeShader",
        title: "14 - Compute Shader",
        description: "This tutorial shows how to implement a simple particle simulation system using compute shaders.",
        image: "images/content/tutorials/Tutorial14_ComputeShader.gif",
        tutorialLink: "wasm-modules/Tutorial14_ComputeShader/Tutorial14_ComputeShader.html",
        githubLink: "https://github.com/DiligentGraphics/DiligentSamples/tree/master/Tutorials/Tutorial14_ComputeShader"
    },
    {
        id: "Tutorial16_BindlessResources",
        title: "16 - Bindless Resources",
        description: "This tutorial shows how to implement bindless resources, a technique that leverages dynamic shader resource indexing feature enabled by the next-gen APIs to significantly improve rendering performance.",
        image: "images/content/tutorials/Tutorial16_BindlessResources.gif",
        tutorialLink: "wasm-modules/Tutorial16_BindlessResources/Tutorial16_BindlessResources.html",
        githubLink: "https://github.com/DiligentGraphics/DiligentSamples/tree/master/Tutorials/Tutorial16_BindlessResources"
    },
    {
        id: "Tutorial17_MSAA",
        title: "17 - MSAA",
        description: "This tutorial demonstrates how to use multisample anti-aliasing (MSAA) to make geometrical edges look smoother and more temporarily stable.",
        image: "images/content/tutorials/Tutorial17_MSAA.gif",
        tutorialLink: "wasm-modules/Tutorial17_MSAA/Tutorial17_MSAA.html",
        githubLink: "https://github.com/DiligentGraphics/DiligentSamples/tree/master/Tutorials/Tutorial17_MSAA"
    },
    {
        id: "Tutorial18_Queries",
        title: "18 - Queries",
        description: "This tutorial demonstrates how to use queries to retrieve various information about the GPU operation, such as the number of primitives rendered, command processing duration, etc.",
        image: "images/content/tutorials/Tutorial18_Queries.gif",
        tutorialLink: "wasm-modules/Tutorial18_Queries/Tutorial18_Queries.html",
        githubLink: "https://github.com/DiligentGraphics/DiligentSamples/tree/master/Tutorials/Tutorial18_Queries"
    },
    {
        id: "Tutorial19_RenderPasses",
        title: "19 - Render Passes",
        description: "This tutorial demonstrates how to use the render passes API to implement simple deferred shading.",
        image: "images/content/tutorials/Tutorial19_RenderPasses.gif",
        tutorialLink: "wasm-modules/Tutorial19_RenderPasses/Tutorial19_RenderPasses.html",
        githubLink: "https://github.com/DiligentGraphics/DiligentSamples/tree/master/Tutorials/Tutorial19_RenderPasses"
    },
    {
        id: "Tutorial26_StateCache",
        title: "26 - State Cache",
        description: "This tutorial expands the path tracing technique implemented in previous tutorial and demonstrates how to use the render state cache to save pipeline states created at run time and load them when the application starts.",
        image: "images/content/tutorials/Tutorial26_StateCache.jpg",
        tutorialLink: "wasm-modules/Tutorial26_StateCache/Tutorial26_StateCache.html",
        githubLink: "https://github.com/DiligentGraphics/DiligentSamples/tree/master/Tutorials/Tutorial26_StateCache"
    },
    {
        id: "Tutorial27_PostProcessing",
        title: "27 - Post Processing",
        description: "This tutorial demonstrates how to use post-processing effects from the DiligentFX module.",
        image: "images/content/tutorials/Tutorial27_PostProcessing.jpg",
        tutorialLink: "wasm-modules/Tutorial27_PostProcessing/Tutorial27_PostProcessing.html",
        githubLink: "https://github.com/DiligentGraphics/DiligentSamples/tree/master/Tutorials/Tutorial27_PostProcessing"
    },
    {
        id: "Tutorial29_OIT",
        title: "29 - Order-Independent Transparency",
        description: "This tutorial demonstrates how to implement order-independent transparency (OIT) methods to render transparent objects without sorting.",
        image: "images/content/tutorials/Tutorial29_OIT.jpg",
        tutorialLink: "wasm-modules/Tutorial29_OIT/Tutorial29_OIT.html",
        githubLink: "https://github.com/DiligentGraphics/DiligentSamples/tree/master/Tutorials/Tutorial29_OIT"
    }
];

const samples = [
    {
        id: "Sample_Atmosphere",
        title: "Atmosphere",
        description: "This sample demonstrates how to integrate Epipolar Light Scattering post-processing effect into an application to render physically-based atmosphere.",
        image: "images/content/samples/Atmosphere.gif",
        tutorialLink: "wasm-modules/Atmosphere/Atmosphere.html",
        githubLink: "https://github.com/DiligentGraphics/DiligentSamples/tree/master/Samples/Atmosphere"
    },
    {
        id: "Sample_GLTFViewer",
        title: "GLTF Viewer",
        description: "This sample demonstrates how to use the Asset Loader and PBR Renderer to load and render GLTF models.",
        image: "images/content/samples/GLTFViewer.jpg",
        tutorialLink: "wasm-modules/GLTFViewer/GLTFViewer.html",
        githubLink: "https://github.com/DiligentGraphics/DiligentSamples/tree/master/Samples/GLTFViewer"
    },
    {
        id: "Sample_ImguiDemo",
        title: "Dear ImGui Demo",
        description: "This sample demonstrates the integration of the engine with dear imgui UI library.",
        image: "images/content/samples/ImguiDemo.png",
        tutorialLink: "wasm-modules/ImguiDemo/ImguiDemo.html",
        githubLink: "https://github.com/DiligentGraphics/DiligentSamples/tree/master/Samples/ImguiDemo"
    },
    {
        id: "Sample_Shadows",
        title: "Shadows",
        description: "This sample demonstrates how to use the Shadowing component to render high-quality shadows.",
        image: "images/content/samples/Shadows.jpg",
        tutorialLink: "wasm-modules/Shadows/Shadows.html",
        githubLink: "https://github.com/DiligentGraphics/DiligentSamples/tree/master/Samples/Shadows"
    }
];

function createCard(item) {
    return `
        <div class="card" id="${item.id}">
            <img src="${item.image}" alt="${item.title}" loading="lazy">
            <h3>${item.title}</h3>
            <p>${item.description}</p>
            <div class="buttons-container">
                <a href="${item.tutorialLink}" class="view-link" target="_blank">Run sample</a>
                <a href="${item.githubLink}" class="github-button" target="_blank">View on GitHub</a>
            </div>
        </div>
    `;
}

const tutorialGrid = document.getElementById('tutorialGrid');
const samplesGrid = document.getElementById('samplesGrid');

tutorials.forEach(tutorial => {
    tutorialGrid.innerHTML += createCard(tutorial);
});

samples.forEach(sample => {
    samplesGrid.innerHTML += createCard(sample);
});

document.querySelector('.search-bar input').addEventListener('input', function(e) {
    const query = e.target.value.toLowerCase();
    document.querySelectorAll('.card').forEach(function(card) {
        const title = card.querySelector('h3').innerText.toLowerCase();
        card.style.display = title.includes(query) ? '' : 'none';
    });
});
