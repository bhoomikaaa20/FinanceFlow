import Image from "next/image";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/hero";
import { featuresData, howItWorksData, statsData, testimonialsData } from "@/data/landing";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from "next/link";

export default function Home() {
  return (
    <div className="mt-60">
      <HeroSection />
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statsData.map((statsData, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">{statsData.value}</div>
                <div className="text-grey-600">{statsData.label}</div>
              </div>
            ))}

          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            All you need to manage your money effortlessly
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3" >
            {featuresData.map((featuresData, index) => (
              <Card key={index} className="py-6">
                <CardContent className="space-y-4 pt-4">
                  {featuresData.icon}
                  <h2 className="text-xl font-semibold">{featuresData.title}</h2>
                  <p className="text-grey-600">{featuresData.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section >


      <section className="py-20 bg-blue-50">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            How it works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3  gap-3" >
            {howItWorksData.map((step, index) => (
              <div key={index} className="py-6 text-center" >
                <div className="space-y-4 pt-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">{step.icon}</div>
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <p className="text-grey-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      <section className="py-20">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Hear from our users
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3" >
            {testimonialsData.map((step, index) => (
              <Card key={index} className="py-6">
                <CardContent className="space-y-4 pt-4">
                  <div className="flex items-center mb-4">
                    <Image src={step.image}
                      alt="testimonial image"
                      width={40}
                      height={40}
                      className="rounded full"></Image>

                    <div className="ml-4">
                      <div className="font-semibold">
                        {step.name}
                      </div>
                      <div className="text-sm text-grey-600">
                        {step.role}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600"> {step.quote}</p>

                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section >


      <section className="py-20 bg-blue-600" >
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to simplify your financial life?
          </h2>
          <p className="text-blue-100 mb-8 mx-auto max-width-2xl">
            Join thousands of users taking charge of their financial future—starting today
          </p>

          <Link href="/dashboard">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 animate-bounce">Start Free Trial</Button>
          </Link>

        </div>
      </section >


    </div >
  );
}
