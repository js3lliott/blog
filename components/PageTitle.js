export default function PageTitle({ children }) {
  return (
    <h1 className="font-serif text-3xl font-medium leading-tight text-ink dark:text-ink-dark sm:text-4xl md:text-5xl">
      {children}
    </h1>
  )
}
