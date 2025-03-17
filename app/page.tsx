import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Car,
  Search,
  ChevronLeft,
  ChevronRight,
  Zap,
  PenToolIcon as Tool,
  DollarSign,
  // Package2,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"

export default function UsaCarsLanding() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header/Navigation */}
      <header className="border-b  bg-gradient-to-r from-black/50 via-gray-600/50 via-50% to-80% to-white/50 sticky w-full top-0 z-50">
        <div className="container flex h-16  overflow-hidden items-center justify-between px-4 md:px-8">
          <Link href="#" className="flex items-center  gap-2 font-bold text-xl">
          <img src="/usacarslogo.PNG" alt="logo" className="h-16 w-full object-cover" />
            {/* <Package2 className="h-8 w-8" />
            <span className="hidden sm:inline">USA CARS</span> */}
          </Link>
          <nav className="hidden md:flex gap-6 text-white">
            <Link href="#" className="text-sm font-medium text-yellow-500">
              Home
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-yellow-500">
              Search
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-yellow-500">
              Shipping
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-yellow-500">
              How to buy
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-yellow-500">
              About us
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-yellow-500">
              Help
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Select defaultValue="en">
              <SelectTrigger className="w-24">
                <SelectValue>
                  <div className="flex items-center gap-2">
                    <Image
                      src="/placeholder.svg?height=20&width=30"
                      alt="US Flag"
                      width={20}
                      height={15}
                      className="rounded"
                    />
                    EN
                  </div>
                </SelectValue>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="es">Español</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="ghost" size="icon" className="hidden sm:flex">
              <Search className="h-5 w-5" />
            </Button>
            <Link href="#" className="text-sm font-medium hover:text-yellow-500 hidden sm:block">
              Log in
            </Link>
            <Button className="bg-yellow-400 text-black hover:bg-yellow-500">Register</Button>
          </div>
        </div>
      </header>

      <main className="flex-1 -mt-16">
        {/* Hero Section */}
        <section className="relative h-[500px] md:h-[600px]">
          <div className="absolute inset-0">
            <Image
              src="https://images.pexels.com/photos/210143/pexels-photo-210143.jpeg?cs=srgb&dl=pexels-pixabay-210143.jpg&fm=jpg"
              alt="Sports Cars"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
          <button className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 p-2 rounded-full hover:bg-white/30 z-10">
            <ChevronLeft className="h-6 w-6 text-white" />
          </button>
          <button className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 p-2 rounded-full hover:bg-white/30 z-10">
            <ChevronRight className="h-6 w-6 text-white" />
          </button>
          <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              WELCOME TO <span className="text-yellow-400">USA CARS</span>
            </h1>
            <p className="max-w-2xl mx-auto mb-8 text-lg">
              Lorem ipsum dolor sit amet consectetur. Lacinia duis senectus praesent non urna justo parturient.
            </p>
            <Button className="bg-yellow-400 text-black hover:bg-yellow-500">Register</Button>
            <div className="absolute bottom-8 flex gap-2">
              {[0, 1, 2, 3, 4].map((i) => (
                <button key={i} className={`h-2 w-2 rounded-full ${i === 2 ? "bg-yellow-400" : "bg-white/50"}`} />
              ))}
            </div>
          </div>
        </section>

        {/* Search Section */}
        <section className="py-8 bg-white">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="relative col-span-1 md:col-span-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input className="pl-10" placeholder="Enter lot, VIN, keywords" />
                </div>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Any Make" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="toyota">Toyota</SelectItem>
                    <SelectItem value="honda">Honda</SelectItem>
                    <SelectItem value="ford">Ford</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Any Model" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="camry">Camry</SelectItem>
                    <SelectItem value="civic">Civic</SelectItem>
                    <SelectItem value="f150">F-150</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex justify-end">
                <Link href="#" className="text-sm text-yellow-500 hover:underline">
                  Advanced Search
                </Link>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="From" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2020">2020</SelectItem>
                    <SelectItem value="2021">2021</SelectItem>
                    <SelectItem value="2022">2022</SelectItem>
                    <SelectItem value="2023">2023</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="To" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2023">2023</SelectItem>
                    <SelectItem value="2024">2024</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Min Price" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="5000">$5,000</SelectItem>
                    <SelectItem value="10000">$10,000</SelectItem>
                    <SelectItem value="15000">$15,000</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Max Price" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="20000">$20,000</SelectItem>
                    <SelectItem value="30000">$30,000</SelectItem>
                    <SelectItem value="40000">$40,000</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex gap-4 items-center">
                <div className="flex items-center gap-2">
                  <input type="checkbox" id="copart" className="w-4 h-4 accent-yellow-400" />
                  <label htmlFor="copart" className="text-sm">
                    Copart
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" id="iaai" className="w-4 h-4 accent-yellow-400" />
                  <label htmlFor="iaai" className="text-sm">
                    IAAI
                  </label>
                </div>
              </div>
              <Button className="w-full bg-yellow-400 text-black hover:bg-yellow-500">Search</Button>
            </div>
          </div>
        </section>

        {/* Category Icons */}
        <section className="py-8 bg-gray-50">
          <div className="container px-4">
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-4 max-w-4xl mx-auto">
              <Link href="#" className="flex flex-col items-center gap-2 group">
                <div className="w-16 h-16 rounded-full bg-yellow-400 flex items-center justify-center group-hover:bg-yellow-500">
                  <Car className="h-8 w-8 text-black" />
                </div>
                <span className="text-xs text-center">Clean cars</span>
              </Link>
              <Link href="#" className="flex flex-col items-center gap-2 group">
                <div className="w-16 h-16 rounded-full bg-yellow-400 flex items-center justify-center group-hover:bg-yellow-500">
                  <Tool className="h-8 w-8 text-black" />
                </div>
                <span className="text-xs text-center">Salvage</span>
              </Link>
              <Link href="#" className="flex flex-col items-center gap-2 group">
                <div className="w-16 h-16 rounded-full bg-yellow-400 flex items-center justify-center group-hover:bg-yellow-500">
                  <Car className="h-8 w-8 text-black" />
                </div>
                <span className="text-xs text-center">Live auction</span>
              </Link>
              <Link href="#" className="flex flex-col items-center gap-2 group">
                <div className="w-16 h-16 rounded-full bg-yellow-400 flex items-center justify-center group-hover:bg-yellow-500">
                  <Zap className="h-8 w-8 text-black" />
                </div>
                <span className="text-xs text-center">Electric vehicles</span>
              </Link>
              <Link href="#" className="flex flex-col items-center gap-2 group">
                <div className="w-16 h-16 rounded-full bg-yellow-400 flex items-center justify-center group-hover:bg-yellow-500">
                  <Car className="h-8 w-8 text-black" />
                </div>
                <span className="text-xs text-center">Repo sale</span>
              </Link>
              <Link href="#" className="flex flex-col items-center gap-2 group">
                <div className="w-16 h-16 rounded-full bg-yellow-400 flex items-center justify-center group-hover:bg-yellow-500">
                  <DollarSign className="h-8 w-8 text-black" />
                </div>
                <span className="text-xs text-center">Vehicles under $1000</span>
              </Link>
              <Link href="#" className="flex flex-col items-center gap-2 group">
                <div className="w-16 h-16 rounded-full bg-yellow-400 flex items-center justify-center group-hover:bg-yellow-500">
                  <Tool className="h-8 w-8 text-black" />
                </div>
                <span className="text-xs text-center">Order parts</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Hot Offers Section */}
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold tracking-tighter">Hot Lots</h2>
              <Link href="#" className="text-yellow-500 hover:underline flex items-center">
                View more <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((item) => (
                <Card key={item} className="overflow-hidden border-0 shadow-lg">
                  <div className="relative">
                    <Badge className="absolute top-2 left-2 bg-yellow-400 text-black">HOT OFFER</Badge>
                    <Image
                      src="https://i.insider.com/592f4169b74af41b008b5977?width=800&format=jpeg&auto=webp"
                      alt="Honda CR-V"
                      width={300}
                      height={200}
                      className="w-full object-cover h-48"
                    />
                  </div>
                  <CardContent className="p-4">
                    <div className="space-y-2">
                      <h3 className="font-bold">2023 HONDA CR-V SPORT</h3>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 opacity-50" />
                        <span className="ml-1 text-sm">4.5</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-2xl font-bold text-yellow-500">$15,360</p>
                          <p className="text-sm text-gray-500 line-through">$16,500</p>
                        </div>
                        <Button className="bg-yellow-400 text-black hover:bg-yellow-500">Buy Now</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="w-full py-12 bg-[#FFF9E6]">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="space-y-2">
                <h3 className="text-4xl font-bold text-yellow-400">
                  2505<span className="text-yellow-400">+</span>
                </h3>
                <p className="text-yellow-400">Cars were sold per year</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-4xl font-bold text-yellow-400">
                  15<span className="text-yellow-400">+</span>
                </h3>
                <p className="text-yellow-400">Years of work</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-4xl font-bold text-yellow-400">
                  50<span className="text-yellow-400">+</span>
                </h3>
                <p className="text-yellow-400">Delivery in countries</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="w-full py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">our services</h2>
              <p className="text-gray-500 max-w-3xl mx-auto">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry standard dummy text ever since the 1500s.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                <div className="w-24 h-24 bg-yellow-400 rounded-full mx-auto mb-6" />
                <h3 className="text-xl font-bold mb-4 text-yellow-400">Search</h3>
                <p className="text-gray-500">
                  Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                <div className="w-24 h-24 bg-yellow-400 rounded-full mx-auto mb-6" />
                <h3 className="text-xl font-bold mb-4 text-yellow-400">Purchase</h3>
                <p className="text-gray-500">
                  Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                <div className="w-24 h-24 bg-yellow-400 rounded-full mx-auto mb-6" />
                <h3 className="text-xl font-bold mb-4 text-yellow-400">Shipping</h3>
                <p className="text-gray-500">
                  Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Customer Reviews */}
        <section className="w-full py-12 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Customer Reviews</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              <button className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hidden md:block">
                <ChevronLeft className="h-5 w-5" />
              </button>
              {[1, 2, 3].map((item) => (
                <Card key={item} className="bg-white overflow-hidden border-0 shadow-sm">
                  <CardContent className="p-8">
                    <div className="space-y-4 text-center">
                      <div className="flex justify-center">
                        <Image
                          src="/placeholder.svg?height=80&width=80"
                          alt="Customer"
                          width={80}
                          height={80}
                          className="rounded-full"
                        />
                      </div>
                      <p className="text-gray-600">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo volutpat tortor, a sed fusce
                        ultrices massa malesuada elit.
                      </p>
                      <div className="flex items-center justify-center">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <div>
                        <h4 className="font-bold">Regina Miles</h4>
                        <p className="text-sm text-gray-500">Car user</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
              <button className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hidden md:block">
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </section>

        {/* Countries Section */}
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">We work with these countries</h2>
              <p className="text-gray-500 max-w-3xl mx-auto mb-4">
                With our global presence, we have served a vast number of customers and delivered vehicles
                internationally.
              </p>
              <p className="font-medium">Usa car and get a car directly to your destination!</p>
            </div>
            <div className="relative mb-12">
              <div className="aspect-[2/1] relative">
                <Image
                  src="https://images.pexels.com/photos/210143/pexels-photo-210143.jpeg?cs=srgb&dl=pexels-pixabay-210143.jpg&fm=jpg"
                  alt="World Map with Shipping Routes"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-y-6 gap-x-4 text-sm mb-8">
              <div>
                <p className="font-semibold text-yellow-400">Nigeria</p>
                <p>United Kingdom</p>
                <p>Albania</p>
                <p>France</p>
              </div>
              <div>
                <p className="font-semibold text-yellow-400">Ghana</p>
                <p>Netherlands</p>
                <p>Côte dIvoire</p>
                <p>Italy</p>
              </div>
              <div>
                <p>United States</p>
                <p>Germany</p>
                <p>Kazakhstan</p>
                <p>Croatia</p>
              </div>
              <div>
                <p className="font-semibold text-yellow-400">Bulgaria</p>
                <p>Poland</p>
                <p>Oman</p>
                <p>Romania</p>
              </div>
              <div>
                <p className="font-semibold text-yellow-400">United Arab Emirates</p>
                <p>Senegal</p>
                <p>Saudi Arabia</p>
              </div>
            </div>
            <div className="text-center">
              <Button className="bg-yellow-400 text-black hover:bg-yellow-500">View more</Button>
            </div>
          </div>
        </section>

        {/* Car Brands Section */}
        <section className="w-full py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Buy cars</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-8 mb-8">
              {/* First Row - Car Logos */}
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="https://manofmany.com/wp-content/uploads/2021/04/Top-15-Best-Sports-Cars-Power-Luxury-and-Design-Ford-GT.jpeg"
                  alt="Toyota"
                  width={80}
                  height={40}
                  className="grayscale hover:grayscale-0 transition-all"
                />
                <p className="text-xs text-center mt-2">Toyota</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="https://manofmany.com/wp-content/uploads/2021/04/Top-15-Best-Sports-Cars-Power-Luxury-and-Design-Ford-GT.jpeg"
                  alt="Honda"
                  width={80}
                  height={40}
                  className="grayscale hover:grayscale-0 transition-all"
                />
                <p className="text-xs text-center mt-2">Honda</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="https://manofmany.com/wp-content/uploads/2021/04/Top-15-Best-Sports-Cars-Power-Luxury-and-Design-Ford-GT.jpeg"
                  alt="Ford"
                  width={80}
                  height={40}
                  className="grayscale hover:grayscale-0 transition-all"
                />
                <p className="text-xs text-center mt-2">Ford</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="https://manofmany.com/wp-content/uploads/2021/04/Top-15-Best-Sports-Cars-Power-Luxury-and-Design-Ford-GT.jpeg"
                  alt="Mercedes-Benz"
                  width={80}
                  height={40}
                  className="grayscale hover:grayscale-0 transition-all"
                />
                <p className="text-xs text-center mt-2">Mercedes-Benz</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="https://manofmany.com/wp-content/uploads/2021/04/Top-15-Best-Sports-Cars-Power-Luxury-and-Design-Ford-GT.jpeg"
                  alt="Hyundai"
                  width={80}
                  height={40}
                  className="grayscale hover:grayscale-0 transition-all"
                />
                <p className="text-xs text-center mt-2">Hyundai</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="https://manofmany.com/wp-content/uploads/2021/04/Top-15-Best-Sports-Cars-Power-Luxury-and-Design-Ford-GT.jpeg"
                  alt="Nissan"
                  width={80}
                  height={40}
                  className="grayscale hover:grayscale-0 transition-all"
                />
                <p className="text-xs text-center mt-2">Nissan</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="https://manofmany.com/wp-content/uploads/2021/04/Top-15-Best-Sports-Cars-Power-Luxury-and-Design-Ford-GT.jpeg"
                  alt="Lexus"
                  width={80}
                  height={40}
                  className="grayscale hover:grayscale-0 transition-all"
                />
                <p className="text-xs text-center mt-2">Lexus</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="https://manofmany.com/wp-content/uploads/2021/04/Top-15-Best-Sports-Cars-Power-Luxury-and-Design-Ford-GT.jpeg"
                  alt="Chevrolet"
                  width={80}
                  height={40}
                  className="grayscale hover:grayscale-0 transition-all"
                />
                <p className="text-xs text-center mt-2">Chevrolet</p>
              </div>

              {/* Second Row - Car Logos */}
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="https://manofmany.com/wp-content/uploads/2021/04/Top-15-Best-Sports-Cars-Power-Luxury-and-Design-Ford-GT.jpeg"
                  alt="BMW"
                  width={80}
                  height={40}
                  className="grayscale hover:grayscale-0 transition-all"
                />
                <p className="text-xs text-center mt-2">BMW</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="https://manofmany.com/wp-content/uploads/2021/04/Top-15-Best-Sports-Cars-Power-Luxury-and-Design-Ford-GT.jpeg"
                  alt="Volkswagen"
                  width={80}
                  height={40}
                  className="grayscale hover:grayscale-0 transition-all"
                />
                <p className="text-xs text-center mt-2">Volkswagen</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="https://manofmany.com/wp-content/uploads/2021/04/Top-15-Best-Sports-Cars-Power-Luxury-and-Design-Ford-GT.jpeg"
                  alt="Kia"
                  width={80}
                  height={40}
                  className="grayscale hover:grayscale-0 transition-all"
                />
                <p className="text-xs text-center mt-2">Kia</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="https://manofmany.com/wp-content/uploads/2021/04/Top-15-Best-Sports-Cars-Power-Luxury-and-Design-Ford-GT.jpeg"
                  alt="Mazda"
                  width={80}
                  height={40}
                  className="grayscale hover:grayscale-0 transition-all"
                />
                <p className="text-xs text-center mt-2">Mazda</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="https://manofmany.com/wp-content/uploads/2021/04/Top-15-Best-Sports-Cars-Power-Luxury-and-Design-Ford-GT.jpeg"
                  alt="Dodge"
                  width={80}
                  height={40}
                  className="grayscale hover:grayscale-0 transition-all"
                />
                <p className="text-xs text-center mt-2">Dodge</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="https://manofmany.com/wp-content/uploads/2021/04/Top-15-Best-Sports-Cars-Power-Luxury-and-Design-Ford-GT.jpeg"
                  alt="Jeep"
                  width={80}
                  height={40}
                  className="grayscale hover:grayscale-0 transition-all"
                />
                <p className="text-xs text-center mt-2">Jeep</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="https://manofmany.com/wp-content/uploads/2021/04/Top-15-Best-Sports-Cars-Power-Luxury-and-Design-Ford-GT.jpeg"
                  alt="Land Rover"
                  width={80}
                  height={40}
                  className="grayscale hover:grayscale-0 transition-all"
                />
                <p className="text-xs text-center mt-2">Land Rover</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="https://manofmany.com/wp-content/uploads/2021/04/Top-15-Best-Sports-Cars-Power-Luxury-and-Design-Ford-GT.jpeg"
                  alt="Audi"
                  width={80}
                  height={40}
                  className="grayscale hover:grayscale-0 transition-all"
                />
                <p className="text-xs text-center mt-2">Audi</p>
              </div>
            </div>
            <div className="text-center">
              <Button className="bg-yellow-400 text-black hover:bg-yellow-500">View more</Button>
            </div>
          </div>
        </section>

        {/* Latest News Section */}
        <section className="w-full py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold mb-12">Latest News</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div>
                <div className="mb-4 overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.svg?height=200&width=350"
                    alt="SLR McLaren Stirling Moss"
                    width={350}
                    height={200}
                    className="w-full h-48 object-cover transition-transform hover:scale-105"
                  />
                </div>
                <h3 className="font-bold mb-2">SLR McLaren Stirling Moss: $4M, ...</h3>
                <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div>
                <div className="mb-4 overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.svg?height=200&width=350"
                    alt="Happy Friday!"
                    width={350}
                    height={200}
                    className="w-full h-48 object-cover transition-transform hover:scale-105"
                  />
                </div>
                <h3 className="font-bold mb-2">Happy Friday!</h3>
                <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div>
                <div className="mb-4 overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.svg?height=200&width=350"
                    alt="From Battlefield to Driveway"
                    width={350}
                    height={200}
                    className="w-full h-48 object-cover transition-transform hover:scale-105"
                  />
                </div>
                <h3 className="font-bold mb-2">From Battlefield to Driveway: Ne...</h3>
                <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white">
        <div className="container px-4 md:px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Company Info</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:text-yellow-400">
                    Search
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-yellow-400">
                    Shipping
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-yellow-400">
                    How to buy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-yellow-400">
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-yellow-400">
                    About Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:text-yellow-400">
                    iOS & Android
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-yellow-400">
                    Watch a Demo
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-yellow-400">
                    Customers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-yellow-400">
                    API
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <p className="mb-4">Usa car city</p>
              <p className="mb-4">+923554403587</p>
              <div className="flex space-x-4">
                <Link href="#" className="hover:text-yellow-400">
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link href="#" className="hover:text-yellow-400">
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link href="#" className="hover:text-yellow-400">
                  <Twitter className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8">
            <p className="text-center text-sm">Copyright Company. All right reserved</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

