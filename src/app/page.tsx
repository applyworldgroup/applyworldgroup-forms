import Link from "next/link";
import { FileText, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

export default function Home() {
  const forms = [
    {
      id: 1,
      title: "General Enquiry",
      url: "general-enquiry",
      description:
        "The General Enquiry Form invites users to ask any questions or express concerns they may have, facilitating clear and timely communication.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            Welcome to Our Forms Center
          </h2>
          <p className="text-muted-foreground">
            Here you can find all the necessary forms for interacting with our
            company. Choose the form you need from the list below.
          </p>
        </section>
        <section>
          <h3 className="text-xl font-semibold mb-6">Available Forms</h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {forms.map((form) => (
              <Card key={form.id}>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileText className="mr-2 h-5 w-5" />
                    {form.title}
                  </CardTitle>
                  <CardDescription>{form.description}</CardDescription>
                  <Button asChild className="mt-4">
                    <Link href={`/forms/${form.url}`}>
                      Go to Form <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
