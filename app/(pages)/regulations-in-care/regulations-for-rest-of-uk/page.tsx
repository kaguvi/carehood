import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Regulatory Requirements for Scotland, Wales, and Northern Ireland',
  description: 'Learn about the regulatory requirements for domiciliary care providers in Scotland, Wales, and Northern Ireland, including registration, inspection, and enforcement processes.'
}

const RegRequirementsPage: React.FC = () => {
  return (
    <div className="container mx-auto px-0 py-8">
      <h1 className="text-3xl font-bold mb-4">Regulatory Requirements for Scotland, Wales, and Northern Ireland</h1>

      <p>Domiciliary care providers in Scotland, Wales, and Northern Ireland are subject to specific regulatory requirements set by their respective regulatory bodies. This page provides an overview of the key regulatory aspects in each region.</p>

      <section>
        <h2>Care Inspectorate (Scotland)</h2>
        <p>In Scotland, the Care Inspectorate is responsible for regulating and inspecting domiciliary care services. Care providers must register with the Care Inspectorate and comply with the National Care Standards.</p>
        <ul>
          <li>Registration process involves submitting an application, paying a fee, and demonstrating compliance with standards</li>
          <li>Inspections are carried out regularly to assess the quality of care and compliance with regulations</li>
          <li>Enforcement actions, such as improvement notices or cancellation of registration, may be taken for non-compliance</li>
        </ul>
      </section>

      <section>
        <h2>Care Inspectorate Wales</h2>
        <p>Care Inspectorate Wales (CIW) is the regulatory body for domiciliary care services in Wales. Care providers must register with CIW and adhere to the Regulation and Inspection of Social Care (Wales) Act 2016.</p>
        <ul>
          <li>Registration involves submitting an application, paying a fee, and meeting the required standards</li>
          <li>Inspections are conducted to assess the quality of care and compliance with regulations</li>
          <li>Enforcement actions, such as improvement notices or cancellation of registration, may be taken for non-compliance</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Regulation and Quality Improvement Authority (RQIA) in Northern Ireland</h2>
        <p className="mb-4">In Northern Ireland, the Regulation and Quality Improvement Authority (RQIA) is responsible for regulating and inspecting domiciliary care services. Care providers must register with RQIA and comply with the Domiciliary Care Agencies Regulations (Northern Ireland) 2007.</p>
        <ul className="list-disc list-inside mb-4">
          <li>Registration process involves submitting an application, paying a fee, and demonstrating compliance with regulations</li>
          <li>Inspections are carried out to assess the quality of care and compliance with standards</li>
          <li>Enforcement actions, such as improvement notices or cancellation of registration, may be taken for non-compliance</li>
        </ul>
      </section>
    </div>
  )
}

export default RegRequirementsPage