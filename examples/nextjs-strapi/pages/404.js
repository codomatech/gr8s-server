// disable SSR on this page
export function getStaticProps() {
  return {props: {}}
}
export default function Custom404() {
  return <h1>404 - Page Not Found</h1>
}
