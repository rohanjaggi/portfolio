import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

const AboutComponent = () => {
  return (
    <div className="flex min-h-screen items-center justify-center gap-8 p-8">
      <div className="w-1/3">
        <Image
          src="/about-pic.png"
          alt="About Me Picture"
          width={400}
          height={400}
          className="rounded-lg shadow-lg"
        />
      </div>

      <div className="w-2/3 space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Education</CardTitle>
            <CardDescription>My academic journey</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="font-bold">University of Waterloo</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Bachelor of Computer Science (2021 - 2025)
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="languages" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="languages">Languages</TabsTrigger>
            <TabsTrigger value="interests">Interests</TabsTrigger>
          </TabsList>
          <TabsContent value="languages" className="mt-4">
            <Card>
              <CardContent className="pt-6">
                <ul className="list-disc pl-6 space-y-2">
                  <li>Python</li>
                  <li>JavaScript/TypeScript</li>
                  <li>Java</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="interests" className="mt-4">
            <Card>
              <CardContent className="pt-6">
                <ul className="list-disc pl-6 space-y-2">
                  <li>Machine Learning</li>
                  <li>Web Development</li>
                  <li>Data Science</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default AboutComponent;