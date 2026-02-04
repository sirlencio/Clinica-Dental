import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Calendar, ArrowRight, Loader2 } from "lucide-react";
import { Link } from "react-router";
import { getAllPatients } from "../services/patients-service";

const HomePage = () => {
  const [patientCount, setPatientCount] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAllPatients().then((data) => {
      if (data) {
        setPatientCount(data.length);
      }
      setIsLoading(false);
    });
  }, []);

  return (
    <div className="flex flex-col gap-16 py-12 px-4 max-w-6xl mx-auto">
      
      <section className="text-center space-y-6">
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter bg-linear-to-b from-foreground to-muted-foreground bg-clip-text text-transparent italic">
          Dental Time
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground font-medium max-w-2xl mx-auto">
          Donde una sonrisa cobra vida. Gestiona tu clínica con simplicidad.
        </p>
        <div className="flex justify-center gap-4 pt-4">
          <Button asChild size="lg" className="rounded-full h-12 px-8 shadow-lg transition-transform hover:scale-105">
            <Link to="/pacientes">
              Ver Pacientes <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="border-2 transition-all hover:border-primary/50 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-lg font-bold">Pacientes Totales</CardTitle>
            <Users className="h-6 w-6 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold flex items-center">
              {isLoading ? (
                <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
              ) : (
                patientCount ?? 0
              )}
            </div>
            <p className="text-sm text-muted-foreground mt-1">
              {patientCount && patientCount > 0 ? "Base de datos actualizada" : "Sin pacientes registrados"}
            </p>
          </CardContent>
        </Card>

        <Card className="border-2 transition-all hover:border-primary/50 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-lg font-bold">Citas de Hoy</CardTitle>
            <Calendar className="h-6 w-6 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold">8</div>
            <p className="text-sm text-muted-foreground mt-1">Próxima a las 10:30 AM</p>
          </CardContent>
        </Card>
      </section>

      <section className="relative overflow-hidden rounded-3xl bg-muted aspect-21/9 flex items-center shadow-inner">
        <img 
          src="/images/promo1.jpg" 
          alt="Promo Dental" 
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="relative z-10 p-12 max-w-xl">
          <h2 className="text-4xl font-extrabold mb-4 tracking-tight">Excelencia en cada tratamiento</h2>
          <p className="text-lg text-muted-foreground font-medium">
            Nuestro compromiso es brindarte las herramientas digitales necesarias para que tus pacientes se sientan en las mejores manos.
          </p>
        </div>
      </section>
      
    </div>
  );
};

export default HomePage;