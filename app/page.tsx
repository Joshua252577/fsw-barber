import { SearchIcon } from "lucide-react"
import Header from "./_components/header"
import { Button } from "./_components/ui/button"
import { Input } from "./_components/ui/input"
import Image from "next/image"
import { Card, CardContent } from "./_components/ui/card"
import { Badge } from "./_components/ui/badge"
import { Avatar, AvatarImage } from "./_components/ui/avatar"
import { db } from "./_lib/prisma"
import BarbershopItem from "./_components/barbershop-item"

const Home = async () => {
  const barbershop = await db.barbershop.findMany({});

  return <div>
    <Header/>
    <div className="p-5">
      <h2 className="text-xl font-bold">Olá, Matheus!</h2>
      <p>Segunda-feira, 05 de agosto.</p>

      <div className="flex items-center gap-2 mt-6">
        <Input placeholder="Faça sua busca..." />
        <Button>
          <SearchIcon/>
        </Button>
      </div>

      <div className="relative w-full h-[150px] mt-6">
        <Image 
        alt="Agende nos melhores com FSW Barber" 
        src="/banner01.png" 
        fill 
        className="rounded-xl object-cover"/>
      </div>
      
      <h2 className="mt-6 mb-3 text-sm uppercase font-bold text-gray-400">
        Agendamentos
      </h2>
      
      <Card>
        <CardContent className="flex justify-between p-0">
          <div className="flex flex-col gap-2 py-5 pl-5">
                <Badge className="w-fit">Confirmado</Badge>
                <h3 className="font-semibold">Corte de cabelo</h3>

                <div className="flex items-center gap-2">
                  <Avatar className="h-6 w-6">
                    <AvatarImage src="https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png"></AvatarImage>
                  </Avatar>

                  <p className="text-sm">Barbearia FSW</p>
                </div>
          </div>

          <div className="flex flex-col items-center justify-center px-5 border-l-2 border-solid">
            <p className="text-sm">Agosto</p>
            <p className="text-2xl">05</p>
            <p className="text-sm">20:00</p>
          </div>
        </CardContent>
      </Card>
      
      <h2 className="mt-6 mb-3 text-sm uppercase font-bold text-gray-400">
        Recomendados
      </h2>

      <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
        {barbershop.map((barbershop) => (
          <BarbershopItem key={barbershop.id} barbershop={barbershop}/>
        ))}
      </div>
    </div>
  </div>
}

export default Home