
// Create a frame
const node = figma.createFrame();
node.x = 0;
node.y = 0;
node.resize(100, 100);

// Set fill to solid red color
node.fills = [{
  type: "SOLID", // Use string for type instead of Raw.SOLID
  visible: true,
  opacity: 1,
  blendMode: "NORMAL",
  color: {
    r: 1,
    g: 0,
    b: 0
  }
}];

// Select and zoom to the node
figma.currentPage.selection = [node];
figma.viewport.scrollAndZoomIntoView([node]);

// Notify completion
figma.notify("Red square created successfully!");

// Close the plugin (optional, remove if you want the plugin to stay open)
// figma.closePlugin();
