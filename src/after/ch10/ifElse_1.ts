export default {};

/**
 * 3-5월 봄
 * 6-8월 여름
 * 9-11월 가을
 * 12-2월 겨울
 */
class Season {
  static readonly seasons = ['봄', '여름', '가을', '겨울'] as const;

  static getSeasonIndex(month: number): number {
    return Math.floor(((month + 9) % 12) / 3);
  }

  static getSeason(month: number): string {
    return this.seasons[this.getSeasonIndex(month)];
  }
}
