import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function PhotographyWebsite() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      {/* Hero */}
      <section className="px-6 py-20 text-center max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-semibold tracking-tight"
        >
          Your Name — Photography
        </motion.h1>
        <p className="mt-4 text-lg text-neutral-600">
          Documentary & creative photography
        </p>
        <Button className="mt-8">View Portfolio</Button>
      </section>

      {/* Portfolio Grid */}
      <section className="px-6 py-16 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <Card key={item} className="overflow-hidden">
            <CardContent className="p-0">
              <div className="aspect-[4/5] bg-neutral-200 flex items-center justify-center text-neutral-500">
                Image {item}
              </div>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* About */}
      <section className="px-6 py-16 max-w-3xl mx-auto">
        <h2 className="text-2xl font-medium">About</h2>
        <p className="mt-4 text-neutral-600 leading-relaxed">
          Short bio about you, your style, what you shoot, and why. Keep this
          human and concise — clients want to know who they are working with.
        </p>
      </section>

      {/* Contact */}
      <section className="px-6 py-16 text-center">
        <h2 className="text-2xl font-medium">Get in touch</h2>
        <p className="mt-4 text-neutral-600">hello@email.com · Instagram · 2026</p>
      </section>
    </div>
  );
}
