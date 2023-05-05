# example-sourcemap

## Usage

### Build

```shell
$ npm run build

> build
> esbuild --bundle --minify --sourcemap --platform=node --target=node18 --outfile=./dist/index.js ./src/index.ts


  dist/index.js      137b 
  dist/index.js.map  478b 

⚡ Done in 1ms
```

### Parse

```shell
$ npm run parse

> parse
> esbuild --bundle --platform=node --target=node18  ./parse.ts | node

[
  "L1:C1   => ../src/main.ts:L1:C8",
  "L1:C10  => ../src/main.ts:L1:C17 (main)",
  "L1:C13  => ../src/main.ts:L1:C30",
  "L1:C14  => ../src/main.ts:L2:C3",
  "L1:C28  => ../src/main.ts:L2:C11",
  "L1:C32  => ../src/main.ts:L2:C15",
  "L1:C39  => ../src/main.ts:L2:C22",
  "L1:C41  => ../src/main.ts:L3:C9",
  "L1:C45  => ../src/main.ts:L3:C13",
  "L1:C51  => ../src/main.ts:L3:C19",
  "L1:C58  => ../src/main.ts:L3:C26",
  "L1:C59  => ../src/main.ts:L4:C1",
  "L1:C60  => ../src/index.ts:L3:C1",
  "L1:C63  => ../src/index.ts:L3:C5",
  "L1:C64  => ../src/index.ts:L4:C3 (main)",
  "L1:C66  => ../src/index.ts:L4:C8",
  "L1:C67  => ../src/index.ts:L5:C1",
  "L1:C74  => ../src/index.ts:L5:C10 (err)",
  "L1:C76  => ../src/index.ts:L5:C3",
  "L1:C77  => ../src/index.ts:L6:C3",
  "L1:C85  => ../src/index.ts:L6:C11",
  "L1:C91  => ../src/index.ts:L6:C17",
  "L1:C100 => ../src/index.ts:L6:C27 (err)",
  "L1:C101 => ../src/index.ts:L6:C30",
  "L1:C102 => ../src/index.ts:L7:C1"
]
```
