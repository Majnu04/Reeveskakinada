import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    guests: '',
    date: '',
    time: '',
    requests: '',
  });
  const [errors, setErrors] = useState({
    name: undefined,
    phone: undefined,
    guests: undefined,
    date: undefined,
    time: undefined,
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Simple validation
  const validate = () => {
    const errs: typeof errors = {
      name: undefined,
      phone: undefined,
      guests: undefined,
      date: undefined,
      time: undefined,
    };
    if (!form.name.trim()) errs.name = 'Name is required';
    if (!form.phone.trim()) errs.phone = 'Phone number is required';
    if (!form.guests || isNaN(Number(form.guests)) || Number(form.guests) < 1) errs.guests = 'Enter number of guests';
    if (!form.date) errs.date = 'Date is required';
    if (!form.time) errs.time = 'Time is required';
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    setErrors((errs) => ({ ...errs, [name]: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <section
      id="contact"
      className="relative w-full py-16 px-2 sm:px-0 bg-gradient-to-br from-background via-card to-primary/10 min-h-[80vh] flex items-center justify-center overflow-hidden"
    >
      {/* Royal background accent */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-br from-primary/30 via-accent/20 to-transparent rounded-full blur-3xl opacity-60 animate-fade-in" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tr from-accent/20 to-transparent rounded-full blur-2xl opacity-40 animate-fade-in" />
      </div>
      <div className="w-full max-w-lg mx-auto bg-card/95 rounded-3xl shadow-2xl p-4 sm:p-10 flex flex-col items-center z-10 animate-fade-in">
        <h2 className="text-2xl xs:text-3xl sm:text-4xl font-playfair font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mb-2 text-center drop-shadow-lg leading-tight break-words">
          Reserve Your Table
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground mb-8 text-center font-medium">Book your royal dining experience at <span className='text-primary font-bold'>Reeves</span></p>
        {submitted ? (
          <div className="text-green-600 text-lg font-semibold text-center py-10">Thank you! Your reservation has been received.</div>
        ) : (
          <form className="w-full space-y-5" onSubmit={handleSubmit} noValidate>
            <div>
              <Input
                name="name"
                type="text"
                placeholder="Full Name"
                className="w-full rounded-xl px-5 py-4 text-lg border border-primary/30 focus:border-primary focus:ring-2 focus:ring-primary/20 transition bg-background/80 shadow-sm"
                value={form.name}
                onChange={handleChange}
                autoComplete="name"
                required
              />
              {errors.name && <div className="text-red-500 text-sm mt-1">{errors.name}</div>}
            </div>
            <div>
              <Input
                name="phone"
                type="tel"
                placeholder="Phone Number"
                className="w-full rounded-xl px-5 py-4 text-lg border border-primary/30 focus:border-primary focus:ring-2 focus:ring-primary/20 transition bg-background/80 shadow-sm"
                value={form.phone}
                onChange={handleChange}
                autoComplete="tel"
                required
              />
              {errors.phone && <div className="text-red-500 text-sm mt-1">{errors.phone}</div>}
            </div>
            <div>
              <Input
                name="guests"
                type="number"
                min="1"
                placeholder="Number of Guests"
                className="w-full rounded-xl px-5 py-4 text-lg border border-primary/30 focus:border-primary focus:ring-2 focus:ring-primary/20 transition bg-background/80 shadow-sm"
                value={form.guests}
                onChange={handleChange}
                required
              />
              {errors.guests && <div className="text-red-500 text-sm mt-1">{errors.guests}</div>}
            </div>
            <div className="flex gap-3">
              <div className="flex-1">
                <Input
                  name="date"
                  type="date"
                  min={new Date().toISOString().split('T')[0]}
                  placeholder="Date"
                  className="w-full rounded-xl px-5 py-4 text-lg border border-primary/30 focus:border-primary focus:ring-2 focus:ring-primary/20 transition bg-background/80 shadow-sm"
                  value={form.date}
                  onChange={handleChange}
                  required
                />
                {errors.date && <div className="text-red-500 text-sm mt-1">{errors.date}</div>}
              </div>
              <div className="flex-1">
                <Input
                  name="time"
                  type="time"
                  placeholder="Time"
                  className="w-full rounded-xl px-5 py-4 text-lg border border-primary/30 focus:border-primary focus:ring-2 focus:ring-primary/20 transition bg-background/80 shadow-sm"
                  value={form.time}
                  onChange={handleChange}
                  required
                />
                {errors.time && <div className="text-red-500 text-sm mt-1">{errors.time}</div>}
              </div>
            </div>
            <div>
              <Textarea
                name="requests"
                placeholder="Special Requests (optional)"
                className="w-full rounded-xl px-5 py-4 text-lg border border-primary/30 focus:border-primary focus:ring-2 focus:ring-primary/20 transition min-h-[60px] bg-background/80 shadow-sm"
                value={form.requests}
                onChange={handleChange}
                rows={3}
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-gradient-warm text-white text-lg font-bold py-4 rounded-xl shadow-lg transition hover:scale-105 hover:opacity-90 active:scale-95 active:opacity-80"
              disabled={loading}
            >
              {loading ? 'Booking...' : 'Reserve Table'}
            </Button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Contact;
