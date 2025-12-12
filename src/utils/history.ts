import type { HistoryRecord } from "../@types/index.type";

class History {
  private STORAGE_KEY = "plate_history_v1";
  static instance: History | null = null;

  constructor() {
    if (History.instance) {
      return History.instance;
    }
    History.instance = this;
  }

  loadHistory(): HistoryRecord[] {
    try {
      const raw = localStorage.getItem(this.STORAGE_KEY);
      if (!raw) return [];
      return JSON.parse(raw) as HistoryRecord[];
    } catch (e: any) {
      console.log(e);
      return [];
    }
  }

  saveHistory(records: HistoryRecord[]) {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(records));
  }
}

const historyStorage = new History();

export default historyStorage;
