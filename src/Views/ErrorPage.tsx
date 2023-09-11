import { RootLayout } from "../Layouts"

const ErrorPage = () => {
  return (
    <RootLayout>
        <div className="bg-secondary-base h-40 w-96 p-4 flex justify-center items-center gap-6 rounded-xl animate-fade">
            <span className="text-4xl text-primary-light font-bold font-custom">404 |</span>
            <p className="text-primary-light font-custom">Page not found</p>
        </div>
    </RootLayout>
  )
}

export default ErrorPage