# Tài liệu (Nextra Docs Theme)

Cấu hình theo [Docs Theme · Get Started](https://nextra.site/docs/docs-theme/start) và cấu trúc trang theo [page.mdx | Nextra](https://nextra.site/docs/file-conventions/page-file): nội dung MDX nằm dưới `app/`, không dùng `content/` + `[[...mdxPath]]`.

## Cấu trúc (ví dụ)

```
app/
  layout.tsx          # theme + getPageMap()
  page.tsx            # `/` → redirect tới `/docs` (giao diện docs đầy đủ)
  docs/
    _meta.tsx         # sidebar nhánh /docs
    page.mdx          # `/docs`
    getting-started/
      page.mdx        # `/docs/getting-started`
    configuration/
      page.mdx        # `/docs/configuration`
mdx-components.tsx
next.config.mjs
```

## Chạy local

```bash
bun install
bun run dev
```

## Search (Pagefind)

Sau `bun run build`, script `postbuild` tạo `public/_pagefind` ([Search Engine | Nextra](https://nextra.site/docs/guide/search)). Chỉ `dev` mà chưa build thì search có thể lỗi.

## Patch

`patches/nextra-theme-docs@4.6.1.patch` — vá validate `Layout` + `children`.
