/**
 * Dragons & Dates Registration Page
 * Design: "Theatrical Playbill" - Victorian Theatre Aesthetic
 * 
 * Color Palette:
 * - Burgundy: oklch(0.35 0.15 20) - Primary
 * - Gold: oklch(0.75 0.12 85) - Accent
 * - Parchment: oklch(0.95 0.02 85) - Background
 * - Fire Red: oklch(0.55 0.22 25)
 * - Ice Blue: oklch(0.7 0.12 230)
 * 
 * Typography:
 * - Display: Cinzel Decorative
 * - Headings: Cinzel
 * - Body: Lora
 */

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "sonner";
import { Heart, Flame, Snowflake, Calendar, MapPin, Clock, Users } from "lucide-react";

export default function Home() {
  const [formData, setFormData] = useState({
    leadName: "",
    partnerName: "",
    email: "",
    ticketType: "couples",
    housePreference: "surprise",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast.success("Your place has been reserved!", {
      description: "Check your email for confirmation details.",
    });
    
    setIsSubmitting(false);
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen parchment-bg">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-12">
        {/* Decorative top border */}
        <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-r from-transparent via-[oklch(0.75_0.12_85)] to-transparent opacity-60" />
        
        <motion.div 
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Dragon Crests */}
          <div className="flex justify-center items-center gap-4 md:gap-8 mb-6">
            <motion.img 
              src="/images/fire-dragon-crest.png" 
              alt="House of Fire" 
              className="w-20 h-20 md:w-28 md:h-28 object-contain"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            />
            <motion.img 
              src="/images/fortress-crest.webp" 
              alt="Fortress Sydney" 
              className="w-8 h-8 md:w-12 md:h-12 object-contain"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.img 
              src="/images/ice-dragon-crest.png" 
              alt="House of Ice" 
              className="w-20 h-20 md:w-28 md:h-28 object-contain"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            />
          </div>

          {/* Title */}
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-[oklch(0.35_0.15_20)] mb-4 tracking-wide">
            Dragons & Dates
          </h1>
          
          <p className="font-heading text-lg md:text-xl text-[oklch(0.45_0.08_20)] mb-6 tracking-widest uppercase">
            A Valentine's Day Theatrical Workshop | Fortress Sydney
          </p>
          
          <p className="font-body text-base md:text-lg text-[oklch(0.35_0.08_20)] italic max-w-2xl mx-auto mb-8">
            "For never was a story of more woe... than this of Juliet and her Romeo."
          </p>
        </motion.div>

        {/* Hero Image */}
        <motion.div 
          className="w-full max-w-3xl mx-auto mb-8"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <img 
            src="/images/hero-dragons.png" 
            alt="Fire and Ice Dragons intertwined" 
            className="w-full h-auto rounded-sm shadow-2xl"
          />
        </motion.div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-[oklch(0.75_0.12_85)] rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-[oklch(0.75_0.12_85)] rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Event Details Section */}
      <section className="py-16 px-4 bg-[oklch(0.35_0.15_20)]">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            {...fadeInUp}
            viewport={{ once: true }}
            whileInView="animate"
            initial="initial"
          >
            <h2 className="font-display text-3xl md:text-4xl text-[oklch(0.95_0.02_85)] mb-4">
              The Playbill
            </h2>
            <div className="flex items-center justify-center gap-4">
              <span className="h-px w-16 bg-[oklch(0.75_0.12_85)]" />
              <Heart className="w-5 h-5 text-[oklch(0.75_0.12_85)]" />
              <span className="h-px w-16 bg-[oklch(0.75_0.12_85)]" />
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: Calendar, label: "Date", value: "February 14th, 2026" },
              { icon: Clock, label: "Time", value: "6:30 PM - 9:00 PM" },
              { icon: MapPin, label: "Location", value: "Fortress Sydney" },
              { icon: Users, label: "Capacity", value: "15 Couples (30 Seats)" },
            ].map((item, index) => (
              <motion.div 
                key={item.label}
                className="flex items-center gap-4 p-4 bg-[oklch(0.95_0.02_85)]/10 rounded-sm border border-[oklch(0.75_0.12_85)]/30"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <item.icon className="w-8 h-8 text-[oklch(0.75_0.12_85)]" />
                <div>
                  <p className="font-heading text-sm text-[oklch(0.75_0.12_85)] uppercase tracking-wider">{item.label}</p>
                  <p className="font-body text-lg text-[oklch(0.95_0.02_85)]">{item.value}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Pricing */}
          <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="font-heading text-xl text-[oklch(0.95_0.02_85)] mb-4">Admission</p>
            <div className="flex flex-col md:flex-row justify-center gap-6">
              <div className="p-6 bg-[oklch(0.95_0.02_85)]/10 rounded-sm border border-[oklch(0.75_0.12_85)]/30">
                <p className="font-display text-3xl text-[oklch(0.75_0.12_85)]">$45</p>
                <p className="font-body text-[oklch(0.95_0.02_85)]/80">Individual</p>
              </div>
              <div className="p-6 bg-[oklch(0.75_0.12_85)]/20 rounded-sm border-2 border-[oklch(0.75_0.12_85)]">
                <p className="font-display text-3xl text-[oklch(0.75_0.12_85)]">$85</p>
                <p className="font-body text-[oklch(0.95_0.02_85)]">Couples Bundle</p>
                <p className="font-body text-sm text-[oklch(0.95_0.02_85)]/70 mt-1">Save $5!</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Five Acts Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-4xl text-[oklch(0.35_0.15_20)] mb-4">
              Your Five-Act Journey
            </h2>
            <div className="flex items-center justify-center gap-4">
              <span className="h-px w-16 bg-[oklch(0.75_0.12_85)]" />
              <span className="font-heading text-[oklch(0.75_0.12_85)]">❧</span>
              <span className="h-px w-16 bg-[oklch(0.75_0.12_85)]" />
            </div>
          </motion.div>

          <div className="space-y-8">
            {[
              {
                act: "I",
                title: '"Do you bite your thumb at us, sir?"',
                description: "Master the art of the brush—learn proper grip and pressure without biting your thumb!",
                icon: "🎭"
              },
              {
                act: "II",
                title: '"Two households, both alike in dignity"',
                description: "Choose your side: House of Fire (Red) or House of Ice (White). Base coating and color theory.",
                icon: "⚔️"
              },
              {
                act: "III",
                title: '"Parting is such sweet sorrow"',
                description: "Learn the secrets of blending and elemental transitions on your dragon's scales.",
                icon: "🎨"
              },
              {
                act: "IV",
                title: '"O, she doth teach the torches to burn bright!"',
                description: "Add the highlights that make your dragon truly legendary—eyes, scales, and hoard gold.",
                icon: "✨"
              },
              {
                act: "V",
                title: '"For never was a story of more woe..."',
                description: "Seal your work with varnish and present your pair to the court. Rewrite the ending!",
                icon: "💕"
              },
            ].map((act, index) => (
              <motion.div 
                key={act.act}
                className="flex gap-6 items-start"
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-[oklch(0.35_0.15_20)] flex items-center justify-center">
                  <span className="font-display text-2xl text-[oklch(0.75_0.12_85)]">{act.act}</span>
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="font-heading text-lg md:text-xl text-[oklch(0.35_0.15_20)] mb-2">
                    <span className="mr-2">{act.icon}</span>
                    {act.title}
                  </h3>
                  <p className="font-body text-[oklch(0.45_0.08_20)]">{act.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form Section */}
      <section className="py-16 px-4 bg-[oklch(0.35_0.15_20)]" id="register">
        <div className="max-w-2xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-4xl text-[oklch(0.95_0.02_85)] mb-4">
              Reserve Your Place
            </h2>
            <p className="font-body text-[oklch(0.95_0.02_85)]/80 italic">
              Secure your seat at the most romantic workshop of the year
            </p>
          </motion.div>

          <motion.form 
            onSubmit={handleSubmit}
            className="bg-[oklch(0.95_0.02_85)] p-8 rounded-sm shadow-2xl border-4 border-[oklch(0.75_0.12_85)]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* Decorative header */}
            <div className="text-center mb-8">
              <span className="font-display text-2xl text-[oklch(0.35_0.15_20)]">✦ Registration ✦</span>
            </div>

            <div className="space-y-6">
              {/* Names */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="leadName" className="font-heading text-[oklch(0.35_0.15_20)]">
                    Your Name
                  </Label>
                  <Input
                    id="leadName"
                    value={formData.leadName}
                    onChange={(e) => setFormData({ ...formData, leadName: e.target.value })}
                    className="border-[oklch(0.75_0.12_85)] focus:ring-[oklch(0.75_0.12_85)] font-body"
                    placeholder="Romeo Montague"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="partnerName" className="font-heading text-[oklch(0.35_0.15_20)]">
                    Partner's Name <span className="text-[oklch(0.45_0.08_20)] text-sm">(if applicable)</span>
                  </Label>
                  <Input
                    id="partnerName"
                    value={formData.partnerName}
                    onChange={(e) => setFormData({ ...formData, partnerName: e.target.value })}
                    className="border-[oklch(0.75_0.12_85)] focus:ring-[oklch(0.75_0.12_85)] font-body"
                    placeholder="Juliet Capulet"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email" className="font-heading text-[oklch(0.35_0.15_20)]">
                  Contact Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="border-[oklch(0.75_0.12_85)] focus:ring-[oklch(0.75_0.12_85)] font-body"
                  placeholder="star-crossed@verona.it"
                  required
                />
              </div>

              {/* Ticket Type */}
              <div className="space-y-3">
                <Label className="font-heading text-[oklch(0.35_0.15_20)]">Ticket Type</Label>
                <RadioGroup
                  value={formData.ticketType}
                  onValueChange={(value) => setFormData({ ...formData, ticketType: value })}
                  className="flex flex-col md:flex-row gap-4"
                >
                  <div className="flex items-center space-x-2 p-4 border border-[oklch(0.75_0.12_85)] rounded-sm flex-1 hover:bg-[oklch(0.75_0.12_85)]/10 transition-colors">
                    <RadioGroupItem value="individual" id="individual" />
                    <Label htmlFor="individual" className="font-body cursor-pointer flex-1">
                      Individual ($45)
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 p-4 border-2 border-[oklch(0.75_0.12_85)] rounded-sm flex-1 bg-[oklch(0.75_0.12_85)]/10 hover:bg-[oklch(0.75_0.12_85)]/20 transition-colors">
                    <RadioGroupItem value="couples" id="couples" />
                    <Label htmlFor="couples" className="font-body cursor-pointer flex-1">
                      Couples Bundle ($85) ⭐
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              {/* House Preference */}
              <div className="space-y-3">
                <Label className="font-heading text-[oklch(0.35_0.15_20)]">House Preference</Label>
                <RadioGroup
                  value={formData.housePreference}
                  onValueChange={(value) => setFormData({ ...formData, housePreference: value })}
                  className="grid grid-cols-1 md:grid-cols-3 gap-4"
                >
                  <div className="flex items-center space-x-2 p-4 border border-[oklch(0.55_0.22_25)] rounded-sm hover:bg-[oklch(0.55_0.22_25)]/10 transition-colors">
                    <RadioGroupItem value="fire" id="fire" />
                    <Label htmlFor="fire" className="font-body cursor-pointer flex items-center gap-2">
                      <Flame className="w-5 h-5 text-[oklch(0.55_0.22_25)]" />
                      House of Fire
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 p-4 border border-[oklch(0.7_0.12_230)] rounded-sm hover:bg-[oklch(0.7_0.12_230)]/10 transition-colors">
                    <RadioGroupItem value="ice" id="ice" />
                    <Label htmlFor="ice" className="font-body cursor-pointer flex items-center gap-2">
                      <Snowflake className="w-5 h-5 text-[oklch(0.7_0.12_230)]" />
                      House of Ice
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 p-4 border border-[oklch(0.75_0.12_85)] rounded-sm hover:bg-[oklch(0.75_0.12_85)]/10 transition-colors">
                    <RadioGroupItem value="surprise" id="surprise" />
                    <Label htmlFor="surprise" className="font-body cursor-pointer flex items-center gap-2">
                      <Heart className="w-5 h-5 text-[oklch(0.75_0.12_85)]" />
                      Surprise Us!
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-6 bg-[oklch(0.35_0.15_20)] hover:bg-[oklch(0.3_0.15_20)] text-[oklch(0.95_0.02_85)] font-heading text-lg tracking-wider uppercase transition-all duration-300 hover:shadow-[0_0_20px_oklch(0.75_0.12_85_/_0.5)]"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="animate-spin">⚔️</span>
                    Reserving...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Heart className="w-5 h-5" />
                    Seal Your Fate
                  </span>
                )}
              </Button>
            </div>

            {/* Decorative footer */}
            <div className="text-center mt-8">
              <span className="font-body text-sm text-[oklch(0.45_0.08_20)] italic">
                "These violent delights have violent ends..."
              </span>
            </div>
          </motion.form>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-4xl text-[oklch(0.35_0.15_20)] mb-4">
              Frequently Asked Questions
            </h2>
            <div className="flex items-center justify-center gap-4">
              <span className="h-px w-16 bg-[oklch(0.75_0.12_85)]" />
              <span className="font-heading text-[oklch(0.75_0.12_85)]">?</span>
              <span className="h-px w-16 bg-[oklch(0.75_0.12_85)]" />
            </div>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                q: "Do I need painting experience?",
                a: "Not at all! Our Five-Act structure is designed for all skill levels. Whether you're a master painter or have never held a brush, you'll create something beautiful."
              },
              {
                q: "What's included in the ticket?",
                a: "Everything you need: a high-quality resin dragon miniature from the 'Clash of Primevals' collection, all paints and brushes, and a themed display box to take your creation home."
              },
              {
                q: "Can I bring my own miniature?",
                a: "This workshop is specifically designed around our Fire & Ice dragon pair. The curriculum and paint sets are tailored to these models."
              },
              {
                q: "What if I'm coming alone?",
                a: "Solo adventurers are welcome! You'll be paired with other individuals to share the experience. Everyone leaves with their own dragon."
              },
              {
                q: "Is food and drink available?",
                a: "Fortress Sydney offers a full tavern menu. We recommend arriving early to grab a drink before the show begins!"
              },
            ].map((faq, index) => (
              <motion.div 
                key={index}
                className="p-6 bg-[oklch(0.97_0.015_85)] rounded-sm border border-[oklch(0.75_0.12_85)]/30"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="font-heading text-lg text-[oklch(0.35_0.15_20)] mb-2">{faq.q}</h3>
                <p className="font-body text-[oklch(0.45_0.08_20)]">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-[oklch(0.35_0.15_20)] text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center items-center gap-4 mb-4">
            <img src="/images/fire-dragon-crest.png" alt="" className="w-12 h-12 object-contain opacity-80" />
            <Heart className="w-6 h-6 text-[oklch(0.75_0.12_85)]" />
            <img src="/images/ice-dragon-crest.png" alt="" className="w-12 h-12 object-contain opacity-80" />
          </div>
          <p className="font-heading text-[oklch(0.95_0.02_85)]/80 text-sm tracking-wider">
            DRAGONS & DATES • VALENTINE'S DAY 2026
          </p>
          <p className="font-body text-[oklch(0.95_0.02_85)]/60 text-sm mt-2">
            Presented by Team ARC at Fortress Sydney
          </p>
        </div>
      </footer>
    </div>
  );
}
