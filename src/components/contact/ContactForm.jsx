'use client';

import { Button, Card, CardBody, CardHeader, Input, Select, SelectItem, Textarea } from '@heroui/react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

const destinations = [
  { value: 'Tubing Campuhan', key: 'form_option_tubing' },
  { value: 'Mount Kawi', key: 'form_option_kawi' },
  { value: 'Mengening Temple', key: 'form_option_mengening' },
  { value: 'UMKM Information', key: 'form_option_umkm' },
];

export default function ContactForm({ translations }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      name: '',
      phone: '',
      destination: '',
      message: '',
    },
  });

  const onSubmit = (data) => {
    const { name, phone, destination, message } = data;
    const phoneNumber = phone.replace(/\D/g, '');

    if (!phoneNumber) {
      toast.error('Masukkan nomor WhatsApp yang valid.');
      return;
    }

    const text = `Halo, saya ${name} ingin memesan paket ${destination}. ${message}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;

    window.open(url, '_blank');
    toast.success('Permintaan Anda telah disiapkan di WhatsApp.');
    reset();
  };

  return (
    <section id="kontak" className="section-shell">
      <Card className="border-none bg-white/80 shadow-2xl">
        <CardHeader className="flex flex-col items-start gap-2 border-b border-secondary/30 bg-secondary/10 p-6">
          <p className="text-sm uppercase tracking-wide text-secondary">{translations.h2_contact}</p>
          <h3 className="text-2xl font-semibold text-dark">{translations.h3_contact_form}</h3>
        </CardHeader>
        <CardBody className="p-6 md:p-8">
          <form className="grid gap-4 md:grid-cols-2" onSubmit={handleSubmit(onSubmit)}>
            <Input
              label={translations.form_placeholder_name}
              variant="bordered"
              {...register('name', { required: true })}
              isInvalid={Boolean(errors.name)}
              errorMessage={errors.name && 'Wajib diisi'}
              classNames={{ label: 'text-dark', input: 'text-dark' }}
            />
            <Input
              label={translations.form_placeholder_wa}
              variant="bordered"
              {...register('phone', { required: true })}
              isInvalid={Boolean(errors.phone)}
              errorMessage={errors.phone && 'Wajib diisi'}
              classNames={{ label: 'text-dark', input: 'text-dark' }}
            />
            <Select
              label={translations.form_option_default}
              variant="bordered"
              {...register('destination', { required: true })}
              isInvalid={Boolean(errors.destination)}
              errorMessage={errors.destination && 'Pilih tujuan'}
              classNames={{ label: 'text-dark' }}
            >
              {destinations.map((dest) => (
                <SelectItem key={dest.value} value={dest.value}>
                  {translations[dest.key] || dest.value}
                </SelectItem>
              ))}
            </Select>
            <Textarea
              label={translations.form_placeholder_msg}
              minRows={3}
              variant="bordered"
              {...register('message', { required: true })}
              isInvalid={Boolean(errors.message)}
              errorMessage={errors.message && 'Wajib diisi'}
              classNames={{ label: 'text-dark', input: 'text-dark' }}
              className="md:col-span-2"
            />
            <div className="md:col-span-2">
              <Button color="warning" variant="shadow" type="submit" className="w-full md:w-auto font-semibold text-dark">
                {translations.btn_submit}
              </Button>
            </div>
          </form>
        </CardBody>
      </Card>
    </section>
  );
}
