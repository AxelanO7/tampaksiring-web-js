import { Badge, Button, Card, CardBody, CardHeader } from '@heroui/react';
import { Eye, ShieldCheck, Waves } from 'lucide-react';

const features = [
  { icon: Waves, key: 'li_tubing_1' },
  { icon: ShieldCheck, key: 'li_tubing_2' },
  { icon: Eye, key: 'li_tubing_3' },
];

export default function TubingFeature({ translations }) {
  return (
    <section id="campuhan" className="section-shell">
      <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
        <div className="space-y-6">
          <Badge color="success" variant="flat" className="bg-primary/10 text-primary">
            {translations.destinations}
          </Badge>
          <h2 className="section-heading">{translations.h2_tubing}</h2>
          <p className="text-lg text-muted">{translations.p_tubing_1}</p>
          <div className="grid gap-3 md:grid-cols-2">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <Card key={feature.key} className="border-none bg-white/70 shadow-md">
                  <CardBody className="flex items-center gap-3">
                    <div className="rounded-full bg-primary/10 p-3 text-primary">
                      <Icon size={22} />
                    </div>
                    <p className="font-semibold text-dark">{translations[feature.key]}</p>
                  </CardBody>
                </Card>
              );
            })}
          </div>
          <Button
            as={"a"}
            href="#kontak"
            scroll={false}
            color="warning"
            variant="shadow"
            className="font-semibold text-dark"
          >
            {translations.btn_tubing}
          </Button>
        </div>
        <Card className="relative overflow-hidden rounded-3xl border-none shadow-2xl">
          <CardHeader className="absolute inset-0 z-10 flex items-end bg-gradient-to-t from-dark/70 to-transparent p-6 text-white">
            <div>
              <p className="text-sm uppercase tracking-wide text-secondary">Campuhan River</p>
              <h3 className="text-2xl font-semibold">{translations.h2_tubing}</h3>
            </div>
          </CardHeader>
          <CardBody className="p-0">
            <img
              src="/images/tubing-1.jpg"
              alt="Tubing Campuhan"
              className="h-[360px] w-full object-cover"
            />
          </CardBody>
        </Card>
      </div>
    </section>
  );
}
