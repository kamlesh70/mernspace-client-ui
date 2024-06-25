'use client';

import React from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { Tenant } from '@/lib/types'
import { useRouter, useSearchParams } from 'next/navigation'

function SelectTenant({tenants}: { tenants: {tenants: Tenant[]} } ) {
  const router = useRouter();
  const searchParams = useSearchParams();


  const handleOnChange = (value: string) => {
    router.push(`/?restaurantId=${value}`);
  }
  return (
    <Select onValueChange={handleOnChange} defaultValue={ searchParams.get('restaurantId') || '' }>
    <SelectTrigger className="w-[180px]">
      <SelectValue placeholder='Select Restaurant' />
    </SelectTrigger>
    <SelectContent >
      {
        tenants.tenants.map((tenant) => (
          <SelectItem key={tenant.id} value={String(tenant.id)}>
            {tenant.name}
          </SelectItem>
        ))
      }
    </SelectContent>
  </Select>
  )
}

export default SelectTenant;