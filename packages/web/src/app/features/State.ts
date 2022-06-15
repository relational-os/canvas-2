import create from "zustand";

type UniverseState = {
  activeBrushSize: number;
  activeColor: number;
  activeTool: Tool;
  prevTool: Tool;
};

// type CanvasState = {
//   id: number;
//   name?: string; // TBD in the future
//   palette: string[];
//   tiles: Record<string, TileState>;
// };

// type TileState = {
//   status: TileStatus;
//   type: TileType;
//   svg?: string;
// };

export enum TileStatus {
  BLANK = "BLANK",
  INVITE = "INVITE",
  DRAWABLE = "DRAWABLE",
  DRAWN = "DRAWN",
}

export enum TileType {
  SOLO = "SOLO",
  COMMONS = "COMMONS",
}

export enum Tool {
  BRUSH = "BRUSH",
  BUCKET = "BUCKET",
  EYEDROPPER = "EYEDROPPER",
}

// TODO: this should be refactored as EditorState
const useStore = create<UniverseState>((set) => ({
  activeBrushSize: 1,
  activeColor: 0,
  activeTool: Tool.BRUSH,
  prevTool: Tool.BRUSH,
}));

export default useStore;
