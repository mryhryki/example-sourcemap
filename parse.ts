import * as fs from "fs/promises";
import * as path from "path";
import * as vlq from "vlq";

async function main() {
  const rawSourceMap = await fs.readFile(
    path.resolve(__dirname, "./dist/index.js.map"),
  );
  const sourceMap = JSON.parse(rawSourceMap.toString("utf-8"));

  const current = [0, 0, 0, 0, 0]
  const merge = (arr: number[]) => {
    arr.forEach((v, i) => current[i] += v)
    return current.slice(0, arr.length)
  }
  const mappings = sourceMap.mappings.split(";").map((line, lineNumber) => ({
    lineNumber,
    mappings: line.split(",").map((str: string) => {
      const [i0, i1, i2, i3, i4] = merge(vlq.decode(str));
      return {
        "変換後の列番号": i0,
        "変換前のファイル名のIndex": i1,
        "変換前のファイルの行番号": i2,
        "変換後のファイルの列番号": i3,
        "変換後の単語のIndex": i4,
        "変換後の単語": i4 == null ? undefined : sourceMap.names[i4],
      };
    }),
  }));
  console.log(JSON.stringify({mappings}, null, 2));
}

main().catch(console.error);
