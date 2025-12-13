import { Card, CardBody, CardHeader, Chip } from '@heroui/react';

export default function ProductShowcase({ translations, products }) {
  return (
    <section id="umkm" className="section-shell space-y-6">
      <div className="text-center">
        <h2 className="section-heading">{translations.h2_umkm}</h2>
        <p className="text-lg text-muted">{translations.p_umkm}</p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <Card key={product.title} className="border-none bg-white/80 shadow-lg">
            <CardHeader className="p-0">
              <img src={product.image} alt={product.title} className="h-48 w-full object-cover" />
            </CardHeader>
            <CardBody className="space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-dark">{product.title}</h3>
                <Chip color="warning" variant="flat" className="bg-secondary/20 text-dark">
                  Local
                </Chip>
              </div>
              <p className="text-muted">{product.description}</p>
            </CardBody>
          </Card>
        ))}
      </div>
    </section>
  );
}
