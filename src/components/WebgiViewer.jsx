import {
  React,
  useRef,
  useState,
  useCallback,
  forwardRef,
  useImperativeHandle,
  useEffect,
} from "react";

import {
  ViewerApp,
  AssetManagerPlugin,
  GBufferPlugin,
  ProgressivePlugin,
  TonemapPlugin,
  SSRPlugin,
  SSAOPlugin,
  BloomPlugin,
  GammaCorrectionPlugin,
  addBasePlugins,
  //   ITexture,
  TweakpaneUiPlugin,
  AssetManagerBasicPopupPlugin,
  CanvasSnipperPlugin,
  //   IViewerPlugin,
  mobileAndTabletCheck,
} from "webgi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
function WebgiViewer() {
  const canvasRef = useRef(null);
  const setupViewer = useCallback(async () => {
    // Initialize the viewer
    const viewer = new ViewerApp({
      canvas: canvasRef.current,
    });

    // Add some plugins
    const manager = await viewer.addPlugin(AssetManagerPlugin);
    const camera = viewer.scene.activeCamera;
    const position = camera.position;
    const target = camera.target;
    // Add plugins individually.
    await viewer.addPlugin(GBufferPlugin);
    await viewer.addPlugin(new ProgressivePlugin(32));
    await viewer.addPlugin(new TonemapPlugin(true));
    await viewer.addPlugin(GammaCorrectionPlugin);
    await viewer.addPlugin(SSRPlugin);
    await viewer.addPlugin(SSAOPlugin);

    await viewer.addPlugin(BloomPlugin);

    // or use this to add all main ones at once.
    await addBasePlugins(viewer);

    // This must be called once after all plugins are added.
    viewer.renderer.refreshPipeline();

    await manager.addFromPath("scene-black.glb");
    viewer.getPlugin(TonemapPlugin).config.clipBackground - true;

    viewer.scene.activeCamera.setCameraOptions({ controlsEnabled: false });
    window.scrollTo(0, 0);
    let needsUpdate = true;
    viewer.addEventListener(
      "preframe",
      () => {
        if (needsUpdate) {
          camera.positionTargetUpdated(true);
          needsUpdate = false;
        }
      },
      []
    );
    useEffect(() => {
      setupViewer(), [];
    });
  }, []);

  return (
    <div id="webgi-canvas-container">
      <canvas id="webgi-canvas" ref={canvasRef}></canvas>
    </div>
  );
}

export default WebgiViewer;
