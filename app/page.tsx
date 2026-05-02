import { redirect } from 'next/navigation'

/** Đưa `/` vào hub tài liệu — giao diện Docs theme (sidebar, TOC) đầy đủ nằm ở `/docs`. */
export default function HomePage() {
  redirect('/docs')
}
