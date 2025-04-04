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

const CCAItem = ({ 
  logo, 
  role, 
  organization 
}: { 
  logo: string;
  role: string;
  organization: string;
}) => (
  <div className="flex items-center space-x-3 p-1.5 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
    <div className="flex-shrink-0">
      <Image
        src={`/logos/${logo}`}
        alt={`${organization} logo`}
        width={40}
        height={40}
        className="rounded-lg"
      />
    </div>
    <div className="flex-1">
      <h3 className="font-semibold text-base text-gray-900 dark:text-gray-100 leading-tight">
        {role}
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-400">
        {organization}
      </p>
    </div>
  </div>
);

const EducationItem = ({ 
  logo, 
  school, 
  degree,
  details 
}: { 
  logo: string;
  school: string;
  degree: string;
  details: string[];
}) => (
  <div className="flex items-start space-x-4">
    <div className="flex-shrink-0">
      <Image
        src={`/logos/${logo}`}
        alt={`${school} logo`}
        width={48}
        height={48}
        className="rounded-lg"
      />
    </div>
    <div className="flex-1">
      <h3 className="font-bold text-lg text-gray-800 dark:text-gray-200">
        {school}
      </h3>
      <p className="text-sm text-gray-500 dark:text-gray-400">
        {degree}
      </p>
      <ul className="list-disc pl-6 mt-2 text-sm text-gray-600 dark:text-gray-400">
        {details.map((detail, index) => (
          <li key={index}>{detail}</li>
        ))}
      </ul>
    </div>
  </div>
);

const AboutComponent = () => {
  const ccas = [
    {
      logo: "gdsc.png",
      role: "Product Associate",
      organization: "Google Developer Student Club"
    },
    {
      logo: "nav.jpg",
      role: "Innovations and Insights Associate",
      organization: "NUS Alumni Ventures"
    },
    {
      logo: "nus_fintech.jpeg",
      role: "Machine Learning Analyst",
      organization: "NUS Fintech Society"
    },
    {
      logo: "nus_invest.jpeg",
      role: "Human Resource Executive",
      organization: "NUS Investment Society"
    }
  ];

  const education = [{
    logo: "nus.png",
    school: "National University of Singapore",
    degree: "BSc. Business Analytics (Honours)",
    details: [
      "Second Major in Economics",
      "Aug 2023 - May 2027"
    ]
  },
  {
    logo: "tembusu.jpeg",
    school: "Tembusu College",
    degree: "Residential College",
    details: []
  }];

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-4/5 flex gap-6 p-6">
        <div className="flex-shrink-0">
          <Image
            src="/about-pic.png"
            alt="About Me Picture"
            width={400}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>

        <div className="flex-1 max-w-lg space-y-6">
          <Card>
            <CardHeader className="pb-1">
              <CardTitle className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                Education
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div>
                  <h3 className="font-bold text-lg text-gray-800 dark:text-gray-200">
                    National University of Singapore
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    BSc. Business Analytics (Honours)
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="education" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="ccas">Co-Curriculars</TabsTrigger>
            </TabsList>
            <TabsContent value="education" className="mt-4">
              <Card>
                <CardContent className="pt-4 pb-4">
                  <div className="space-y-6">
                    {education.map((edu, index) => (
                      <EducationItem 
                        key={index}
                        logo={edu.logo}
                        school={edu.school}
                        degree={edu.degree}
                        details={edu.details}
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="ccas" className="mt-2">
              <Card>
                <CardContent className="pt-1">
                  <div className="space-y-1">
                    {ccas.map((cca, index) => (
                      <CCAItem 
                        key={index}
                        logo={cca.logo}
                        role={cca.role}
                        organization={cca.organization}
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default AboutComponent;