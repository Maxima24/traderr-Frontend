import { Search } from 'lucide-react'
import React from 'react'
import { sortData } from '../traders/page'
import { Button } from '@/shared/ui/Button'
import TraderCard from '@/shared/TraderCard'
import Container from '@/shared/Container'
import Card from '@/shared/ui/Card'

const Page = () => {
      return (
            <Container className='p-6'>
                  <div className='space-y-4'>
                        <h1 className='text-3xl font-semibold'>Portfolio</h1>
                        <div className='grid grid-cols-3 gap-3 '>
                              <Card className='p-6'>
                                    <h1 className='mb-5 text-lg font-bold'>Total Balance</h1>
                                    <p className='text-xl'>$250,000</p>
                              </Card>
                              <Card >
                                    <h1 className='mb-5 text-lg font-bold'>Funds Allocated</h1>
                                    <p className='text-xl'>$250,000</p>
                              </Card>
                              <Card >
                                    <h1 className='mb-5 text-lg font-bold'>Total Balance</h1>
                                    <p className='text-xl'>$250,000</p>
                              </Card>
                        </div>
                  </div>
            </Container>
      )
}

export default Page