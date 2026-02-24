import { useState } from 'react';
import { useSubmitInquiry } from '../hooks/useQueries';
import { CheckCircle, Loader2, Mail } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface FormData {
  name: string;
  email: string;
  phone: string;
  wearableDevice: string;
  primarySport: string;
  message: string;
}

const initialForm: FormData = {
  name: '',
  email: '',
  phone: '',
  wearableDevice: '',
  primarySport: '',
  message: '',
};

export default function EnrollmentSection() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [submitted, setSubmitted] = useState(false);

  const { mutate: submitInquiry, isPending } = useSubmitInquiry();

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = 'Enter a valid email';
    if (!form.wearableDevice) newErrors.wearableDevice = 'Please select your wearable device';
    if (!form.primarySport.trim()) newErrors.primarySport = 'Primary sport/event is required';
    if (!form.message.trim()) newErrors.message = 'Please tell us a bit about yourself';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    submitInquiry(
      {
        name: form.name,
        email: form.email,
        phone: form.phone.trim() || null,
        wearableDevice: form.wearableDevice,
        primarySport: form.primarySport,
        message: form.message,
      },
      {
        onSuccess: () => {
          setSubmitted(true);
          setForm(initialForm);
        },
      }
    );
  };

  return (
    <section id="apply" className="bg-vp-dark-2 section-pad">
      <div className="container-site">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <span className="text-vp-amber font-display text-sm uppercase tracking-[0.25em] font-600">
              Get Started
            </span>
            <h2 className="font-display font-800 text-4xl md:text-5xl uppercase text-vp-white mt-3 mb-4 leading-tight">
              Ready to Train<br />
              <span className="text-vp-amber">With Confidence?</span>
            </h2>
            <p className="text-vp-white-muted text-lg leading-relaxed">
              Tell us about yourself and your goals. We'll reach out to discuss whether Velocity Prime is the right fit for your training block.
            </p>
          </div>

          {submitted ? (
            <div className="bg-vp-dark-3 border border-vp-amber/40 rounded-2xl p-10 text-center shadow-amber-glow">
              <CheckCircle size={48} className="text-vp-amber mx-auto mb-4" />
              <h3 className="font-display font-800 text-2xl uppercase text-vp-white mb-3">
                Application Received
              </h3>
              <p className="text-vp-white-muted leading-relaxed">
                Thank you for your interest in Velocity Prime. A member of our team will be in touch within 48 hours to discuss your goals and next steps.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 text-vp-amber text-sm font-display font-600 uppercase tracking-wider hover:text-vp-amber-light transition-colors"
              >
                Submit Another Inquiry
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-vp-dark-3 border border-vp-dark-border rounded-2xl p-6 md:p-8 space-y-5"
            >
              {/* Name */}
              <div className="space-y-1.5">
                <Label htmlFor="name" className="text-vp-white-muted text-xs font-display uppercase tracking-wider">
                  Full Name <span className="text-vp-amber">*</span>
                </Label>
                <Input
                  id="name"
                  value={form.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  placeholder="Your full name"
                  className="bg-vp-dark-4 border-vp-dark-border text-vp-white placeholder:text-vp-white-dim focus:border-vp-amber focus:ring-vp-amber/20"
                />
                {errors.name && <p className="text-red-400 text-xs">{errors.name}</p>}
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <Label htmlFor="email" className="text-vp-white-muted text-xs font-display uppercase tracking-wider">
                  Email Address <span className="text-vp-amber">*</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  placeholder="you@example.com"
                  className="bg-vp-dark-4 border-vp-dark-border text-vp-white placeholder:text-vp-white-dim focus:border-vp-amber focus:ring-vp-amber/20"
                />
                {errors.email && <p className="text-red-400 text-xs">{errors.email}</p>}
              </div>

              {/* Phone */}
              <div className="space-y-1.5">
                <Label htmlFor="phone" className="text-vp-white-muted text-xs font-display uppercase tracking-wider">
                  Phone Number <span className="text-vp-white-dim">(optional)</span>
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  value={form.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                  placeholder="+1 (555) 000-0000"
                  className="bg-vp-dark-4 border-vp-dark-border text-vp-white placeholder:text-vp-white-dim focus:border-vp-amber focus:ring-vp-amber/20"
                />
              </div>

              {/* Wearable Device */}
              <div className="space-y-1.5">
                <Label className="text-vp-white-muted text-xs font-display uppercase tracking-wider">
                  Wearable Device <span className="text-vp-amber">*</span>
                </Label>
                <Select
                  value={form.wearableDevice}
                  onValueChange={(val) => handleChange('wearableDevice', val)}
                >
                  <SelectTrigger className="bg-vp-dark-4 border-vp-dark-border text-vp-white focus:border-vp-amber focus:ring-vp-amber/20">
                    <SelectValue placeholder="Select your wearable" />
                  </SelectTrigger>
                  <SelectContent className="bg-vp-dark-3 border-vp-dark-border text-vp-white">
                    <SelectItem value="Garmin" className="focus:bg-vp-dark-4 focus:text-vp-white">Garmin</SelectItem>
                    <SelectItem value="Whoop" className="focus:bg-vp-dark-4 focus:text-vp-white">Whoop</SelectItem>
                    <SelectItem value="Oura" className="focus:bg-vp-dark-4 focus:text-vp-white">Oura Ring</SelectItem>
                    <SelectItem value="Apple Watch" className="focus:bg-vp-dark-4 focus:text-vp-white">Apple Watch</SelectItem>
                    <SelectItem value="Other" className="focus:bg-vp-dark-4 focus:text-vp-white">Other</SelectItem>
                  </SelectContent>
                </Select>
                {errors.wearableDevice && <p className="text-red-400 text-xs">{errors.wearableDevice}</p>}
              </div>

              {/* Primary Sport */}
              <div className="space-y-1.5">
                <Label htmlFor="primarySport" className="text-vp-white-muted text-xs font-display uppercase tracking-wider">
                  Primary Sport / Event <span className="text-vp-amber">*</span>
                </Label>
                <Input
                  id="primarySport"
                  value={form.primarySport}
                  onChange={(e) => handleChange('primarySport', e.target.value)}
                  placeholder="e.g. Ironman Triathlon, Marathon, Cycling"
                  className="bg-vp-dark-4 border-vp-dark-border text-vp-white placeholder:text-vp-white-dim focus:border-vp-amber focus:ring-vp-amber/20"
                />
                {errors.primarySport && <p className="text-red-400 text-xs">{errors.primarySport}</p>}
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <Label htmlFor="message" className="text-vp-white-muted text-xs font-display uppercase tracking-wider">
                  Tell Us About Your Goals <span className="text-vp-amber">*</span>
                </Label>
                <Textarea
                  id="message"
                  value={form.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  placeholder="Tell us about your training, your goal race, and how you heard about Velocity Prime..."
                  rows={4}
                  className="bg-vp-dark-4 border-vp-dark-border text-vp-white placeholder:text-vp-white-dim focus:border-vp-amber focus:ring-vp-amber/20 resize-none"
                />
                {errors.message && <p className="text-red-400 text-xs">{errors.message}</p>}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isPending}
                className="w-full py-4 bg-vp-amber text-vp-dark font-display font-800 text-base uppercase tracking-widest rounded hover:bg-vp-amber-light transition-all shadow-amber-glow-sm hover:shadow-amber-glow disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isPending ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Submitting...
                  </>
                ) : (
                  'Submit Application'
                )}
              </button>

              {/* Direct email callout */}
              <div className="flex items-center gap-3 pt-1 border-t border-vp-dark-border">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-vp-amber/10 border border-vp-amber/30 flex items-center justify-center">
                  <Mail size={14} className="text-vp-amber" />
                </div>
                <p className="text-vp-white-muted text-sm leading-snug">
                  Prefer to reach us directly?{' '}
                  <a
                    href="mailto:athletes@velocityhealthclinic.com"
                    className="text-vp-amber font-600 hover:text-vp-amber-light transition-colors underline underline-offset-2 decoration-vp-amber/40 hover:decoration-vp-amber-light"
                  >
                    athletes@velocityhealthclinic.com
                  </a>
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
