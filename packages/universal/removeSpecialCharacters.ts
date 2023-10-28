/**
 * ひらがな、カタカナ、漢字、英数字(全角/半角)、アンダースコア以外を取り除きます。
 *
 * \w : 半角英数字とアンダースコア
 * \u3040-\u309F : ひらがな
 * \u30A0-\u30FF : カタカナ
 * \uFF00-\uFF9F : 全角英数字
 * \u4E00-\u9FAF : CJK（中国、日本、韓国）統合漢字
 */
export function removeSpecialCharacters(str: string): string {
  return str.replace(
    /[^\w\u3040-\u309F\u30A0-\u30FF\uFF00-\uFF9F\u4E00-\u9FAF]/g,
    '',
  )
}
