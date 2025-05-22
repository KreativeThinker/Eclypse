'use client'
import { useState } from 'react'
import Button from '@/components/ui/button'
import Input from '@/components/ui/input'
import BASE_URL from '@/utils/api'

export default function AddressForm() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [street, setStreet] = useState('')
  const [apt, setApt] = useState('')
  const [state, setState] = useState('')
  const [zip, setZip] = useState('')

  const clearForm = () => {
    setFirstName('')
    setLastName('')
    setStreet('')
    setApt('')
    setState('')
    setZip('')
  }
  const handleSubmit = async () => {
    const data = {
      firstName,
      lastName,
      street,
      apt,
      state,
      zip,
    }

    try {
      const res = await fetch(`${BASE_URL}/buy`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!res.ok) throw new Error('Failed to save address')
      console.log('Address saved successfully:', data)
      clearForm()
    } catch (error) {
      console.error('Error saving adddress:', error)
    }
  }

  return (
    <div className="border-neutral-5 flex flex-col space-y-4 rounded-md border p-4">
      <div className="flex items-center space-x-2">
        <div className="border-accent rounded-full border-2 p-2">
          <div className="bg-accent h-3 w-3 rounded-full" />
        </div>
        <p className="font-medium">Add New Address</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Input
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <Input
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>

      <Input
        placeholder="Street Address"
        value={street}
        onChange={(e) => setStreet(e.target.value)}
      />

      <div className="grid grid-cols-3 gap-4">
        <Input placeholder="Apt Number" value={apt} onChange={(e) => setApt(e.target.value)} />
        <Input placeholder="State" value={state} onChange={(e) => setState(e.target.value)} />
        <Input placeholder="Zip" value={zip} onChange={(e) => setZip(e.target.value)} />
      </div>

      <Button variant="filled" theme="dark" className="py-4" onClick={handleSubmit}>
        Save This Address
      </Button>

      <Button variant="outline" className="border-neutral-5 py-4" onClick={clearForm}>
        Cancel
      </Button>
    </div>
  )
}
