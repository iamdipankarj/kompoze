---
inject: true
to: src/components/index.ts
append: true
before: "\n"
---
export * from './<%= name %>'