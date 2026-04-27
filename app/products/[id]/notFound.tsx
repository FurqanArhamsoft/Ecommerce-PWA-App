import Link from "next/link"
import { ArrowLeft, Package } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center space-y-6 max-w-md mx-auto px-4">
        <div className="flex justify-center">
          <Package className="w-24 h-24 text-muted-foreground" />
        </div>

        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Product Not Found</h1>
          <p className="text-muted-foreground">
            Sorry, we couldn't find the product you're looking for. It may have been removed or doesn't exist.
          </p>
        </div>

        <button>
          <Link href="/" className="inline-flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Products
          </Link>
        </button>
      </div>
    </div>
  )
}