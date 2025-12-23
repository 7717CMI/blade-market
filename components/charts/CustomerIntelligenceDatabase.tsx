'use client'

interface CustomerData {
  sNo: number
  customerName: string
  customerType: string
  buyingCenters: string
  buyingTriggers: string
  qualificationSwitchingBehavior: string
  procurementPatterns: string
  channelMix: string
  customerPrioritization: string
  // Contact Details
  keyContactPerson: string
  designation: string
  emailAddress: string
  phoneNumber: string
  websiteUrl: string
}

// Sample data for demonstration
const sampleCustomerData: CustomerData[] = [
  {
    sNo: 1,
    customerName: 'Saudi Aramco - Ras Tanura Refinery',
    customerType: 'Converters',
    buyingCenters: 'Plant, Procurement',
    buyingTriggers: 'Uptime, scrap reduction',
    qualificationSwitchingBehavior: 'Trial process, approval cycles',
    procurementPatterns: 'Monthly orders, vendor consolidation',
    channelMix: 'Direct (60%), Industrial Distribution (40%)',
    customerPrioritization: 'High-value, premium potential',
    keyContactPerson: 'Ahmed Al-Rashid',
    designation: 'Maintenance Director',
    emailAddress: 'a.rashid@aramco.com',
    phoneNumber: '+966 13 877 0000',
    websiteUrl: 'www.aramco.com'
  },
  {
    sNo: 2,
    customerName: 'ADNOC Refining - Ruwais',
    customerType: 'Finishing Houses',
    buyingCenters: 'Quality, Operations',
    buyingTriggers: 'Cut quality, safety',
    qualificationSwitchingBehavior: 'Spec validation, risk factors',
    procurementPatterns: 'Quarterly orders, inventory practices',
    channelMix: 'OEM/Integrator (70%), Direct (30%)',
    customerPrioritization: 'Volume, repeatability',
    keyContactPerson: 'Fatima Al-Mansouri',
    designation: 'Plant O&M Manager',
    emailAddress: 'f.mansouri@adnoc.ae',
    phoneNumber: '+971 2 602 0000',
    websiteUrl: 'www.adnoc.ae'
  },
  {
    sNo: 3,
    customerName: 'Qatar Petroleum - Mesaieed Industrial',
    customerType: 'Converters',
    buyingCenters: 'Procurement, Quality',
    buyingTriggers: 'Standardization, uptime',
    qualificationSwitchingBehavior: 'Trial process, spec validation',
    procurementPatterns: 'Bi-weekly orders, vendor consolidation',
    channelMix: 'Industrial Distribution (50%), Direct (50%)',
    customerPrioritization: 'Spec complexity, premium potential',
    keyContactPerson: 'Mohammed Al-Thani',
    designation: 'Operations Manager',
    emailAddress: 'm.thani@qatarenergy.qa',
    phoneNumber: '+974 4013 3333',
    websiteUrl: 'www.qatarenergy.qa'
  },
  {
    sNo: 4,
    customerName: 'Kuwait National Petroleum Company',
    customerType: 'Finishing Houses',
    buyingCenters: 'Plant, Operations',
    buyingTriggers: 'Safety, scrap reduction',
    qualificationSwitchingBehavior: 'Approval cycles, risk factors',
    procurementPatterns: 'Monthly orders, inventory practices',
    channelMix: 'E-commerce (20%), Direct (80%)',
    customerPrioritization: 'Volume, high-value',
    keyContactPerson: 'Khalid Al-Sabah',
    designation: 'Reliability & Risk Manager',
    emailAddress: 'k.sabah@knpc.com.kw',
    phoneNumber: '+965 2326 5000',
    websiteUrl: 'www.knpc.com.kw'
  },
  {
    sNo: 5,
    customerName: 'DUBAL Power Plant',
    customerType: 'Converters',
    buyingCenters: 'Quality, Procurement',
    buyingTriggers: 'Cut quality, uptime',
    qualificationSwitchingBehavior: 'Spec validation, trial process',
    procurementPatterns: 'Weekly orders, vendor consolidation',
    channelMix: 'Direct (90%), OEM/Integrator (10%)',
    customerPrioritization: 'Premium potential, repeatability',
    keyContactPerson: 'Sara Al-Hashemi',
    designation: 'Asset Management Director',
    emailAddress: 's.hashemi@ega.ae',
    phoneNumber: '+971 4 802 9999',
    websiteUrl: 'www.ega.ae'
  },
  {
    sNo: 6,
    customerName: 'Oman LNG - Qalhat',
    customerType: 'Finishing Houses',
    buyingCenters: 'Operations, Plant',
    buyingTriggers: 'Standardization, safety',
    qualificationSwitchingBehavior: 'Risk factors, approval cycles',
    procurementPatterns: 'Monthly orders, inventory practices',
    channelMix: 'Industrial Distribution (60%), E-commerce (40%)',
    customerPrioritization: 'Spec complexity, volume',
    keyContactPerson: 'Yusuf Al-Balushi',
    designation: 'Technical Director',
    emailAddress: 'y.balushi@omanlng.com',
    phoneNumber: '+968 2520 6000',
    websiteUrl: 'www.omanlng.com'
  },
  {
    sNo: 7,
    customerName: 'Bahrain Petroleum Company (BAPCO)',
    customerType: 'Converters',
    buyingCenters: 'Plant, Quality',
    buyingTriggers: 'Uptime, cut quality',
    qualificationSwitchingBehavior: 'Trial process, risk factors',
    procurementPatterns: 'Bi-weekly orders, inventory practices',
    channelMix: 'Direct (75%), Industrial Distribution (25%)',
    customerPrioritization: 'High-value, spec complexity',
    keyContactPerson: 'Hassan Al-Khalifa',
    designation: 'Plant Manager',
    emailAddress: 'h.khalifa@bapco.net',
    phoneNumber: '+973 1775 5555',
    websiteUrl: 'www.bapco.net'
  },
  {
    sNo: 8,
    customerName: 'Emirates Steel Industries',
    customerType: 'Finishing Houses',
    buyingCenters: 'Procurement, Operations',
    buyingTriggers: 'Safety, standardization',
    qualificationSwitchingBehavior: 'Approval cycles, spec validation',
    procurementPatterns: 'Monthly orders, vendor consolidation',
    channelMix: 'OEM/Integrator (55%), Direct (45%)',
    customerPrioritization: 'Volume, repeatability',
    keyContactPerson: 'Rashid Al-Nuaimi',
    designation: 'Procurement Head',
    emailAddress: 'r.nuaimi@emiratessteel.com',
    phoneNumber: '+971 2 509 3000',
    websiteUrl: 'www.emiratessteel.com'
  },
  {
    sNo: 9,
    customerName: 'SABIC - Jubail Complex',
    customerType: 'Converters',
    buyingCenters: 'Quality, Plant',
    buyingTriggers: 'Scrap reduction, uptime',
    qualificationSwitchingBehavior: 'Spec validation, trial process',
    procurementPatterns: 'Weekly orders, inventory practices',
    channelMix: 'Direct (80%), E-commerce (20%)',
    customerPrioritization: 'Premium potential, high-value',
    keyContactPerson: 'Abdullah Al-Ghamdi',
    designation: 'Technical Manager',
    emailAddress: 'a.ghamdi@sabic.com',
    phoneNumber: '+966 13 359 0000',
    websiteUrl: 'www.sabic.com'
  },
  {
    sNo: 10,
    customerName: 'Ma\'aden Aluminium',
    customerType: 'Finishing Houses',
    buyingCenters: 'Operations, Procurement',
    buyingTriggers: 'Cut quality, safety',
    qualificationSwitchingBehavior: 'Risk factors, approval cycles',
    procurementPatterns: 'Quarterly orders, vendor consolidation',
    channelMix: 'Industrial Distribution (65%), Direct (35%)',
    customerPrioritization: 'Spec complexity, volume',
    keyContactPerson: 'Faisal Al-Harbi',
    designation: 'Operations Director',
    emailAddress: 'f.harbi@maaden.com.sa',
    phoneNumber: '+966 11 874 8000',
    websiteUrl: 'www.maaden.com.sa'
  },
  {
    sNo: 11,
    customerName: 'Abu Dhabi National Oil Company',
    customerType: 'Converters',
    buyingCenters: 'Plant, Quality',
    buyingTriggers: 'Standardization, uptime',
    qualificationSwitchingBehavior: 'Trial process, spec validation',
    procurementPatterns: 'Monthly orders, inventory practices',
    channelMix: 'Direct (70%), OEM/Integrator (30%)',
    customerPrioritization: 'High-value, repeatability',
    keyContactPerson: 'Omar Al-Muhairi',
    designation: 'Senior Engineer',
    emailAddress: 'o.muhairi@adnoc.ae',
    phoneNumber: '+971 2 602 1000',
    websiteUrl: 'www.adnoc.ae'
  },
  {
    sNo: 12,
    customerName: 'Tasnee Petrochemicals',
    customerType: 'Finishing Houses',
    buyingCenters: 'Procurement, Quality',
    buyingTriggers: 'Scrap reduction, cut quality',
    qualificationSwitchingBehavior: 'Approval cycles, risk factors',
    procurementPatterns: 'Bi-weekly orders, vendor consolidation',
    channelMix: 'E-commerce (30%), Direct (70%)',
    customerPrioritization: 'Volume, premium potential',
    keyContactPerson: 'Nasser Al-Dossary',
    designation: 'Supply Chain Manager',
    emailAddress: 'n.dossary@tasnee.com',
    phoneNumber: '+966 11 265 3333',
    websiteUrl: 'www.tasnee.com'
  },
  {
    sNo: 13,
    customerName: 'Dubai Aluminium (DUBAL)',
    customerType: 'Converters',
    buyingCenters: 'Operations, Plant',
    buyingTriggers: 'Safety, uptime',
    qualificationSwitchingBehavior: 'Spec validation, trial process',
    procurementPatterns: 'Weekly orders, inventory practices',
    channelMix: 'Direct (85%), Industrial Distribution (15%)',
    customerPrioritization: 'Spec complexity, high-value',
    keyContactPerson: 'Layla Al-Maktoum',
    designation: 'Quality Assurance Head',
    emailAddress: 'l.maktoum@ega.ae',
    phoneNumber: '+971 4 802 8000',
    websiteUrl: 'www.ega.ae'
  },
  {
    sNo: 14,
    customerName: 'Sohar Aluminium',
    customerType: 'Finishing Houses',
    buyingCenters: 'Quality, Operations',
    buyingTriggers: 'Cut quality, standardization',
    qualificationSwitchingBehavior: 'Risk factors, approval cycles',
    procurementPatterns: 'Monthly orders, vendor consolidation',
    channelMix: 'OEM/Integrator (60%), Direct (40%)',
    customerPrioritization: 'Repeatability, volume',
    keyContactPerson: 'Said Al-Busaidi',
    designation: 'Production Manager',
    emailAddress: 's.busaidi@soharaluminium.com',
    phoneNumber: '+968 2685 0000',
    websiteUrl: 'www.soharaluminium.com'
  },
  {
    sNo: 15,
    customerName: 'Yanbu Aramco Sinopec Refining',
    customerType: 'Converters',
    buyingCenters: 'Plant, Procurement',
    buyingTriggers: 'Uptime, scrap reduction',
    qualificationSwitchingBehavior: 'Trial process, spec validation',
    procurementPatterns: 'Quarterly orders, inventory practices',
    channelMix: 'Direct (65%), E-commerce (35%)',
    customerPrioritization: 'Premium potential, spec complexity',
    keyContactPerson: 'Wei Zhang',
    designation: 'Joint Venture Director',
    emailAddress: 'w.zhang@yasref.com',
    phoneNumber: '+966 14 321 0000',
    websiteUrl: 'www.yasref.com'
  },
  {
    sNo: 16,
    customerName: 'Aluminium Bahrain (ALBA)',
    customerType: 'Finishing Houses',
    buyingCenters: 'Operations, Quality',
    buyingTriggers: 'Safety, cut quality',
    qualificationSwitchingBehavior: 'Approval cycles, risk factors',
    procurementPatterns: 'Bi-weekly orders, vendor consolidation',
    channelMix: 'Industrial Distribution (50%), Direct (50%)',
    customerPrioritization: 'High-value, volume',
    keyContactPerson: 'Isa Al-Ansari',
    designation: 'Chief Operations Officer',
    emailAddress: 'i.ansari@alba.com.bh',
    phoneNumber: '+973 1783 0000',
    websiteUrl: 'www.albasmelter.com'
  },
  {
    sNo: 17,
    customerName: 'Petro Rabigh',
    customerType: 'Converters',
    buyingCenters: 'Quality, Plant',
    buyingTriggers: 'Standardization, uptime',
    qualificationSwitchingBehavior: 'Spec validation, trial process',
    procurementPatterns: 'Monthly orders, inventory practices',
    channelMix: 'Direct (75%), OEM/Integrator (25%)',
    customerPrioritization: 'Repeatability, premium potential',
    keyContactPerson: 'Kenji Tanaka',
    designation: 'VP Operations',
    emailAddress: 'k.tanaka@petrorabigh.com',
    phoneNumber: '+966 12 425 0000',
    websiteUrl: 'www.petrorabigh.com'
  },
  {
    sNo: 18,
    customerName: 'Qatar Aluminium (Qatalum)',
    customerType: 'Finishing Houses',
    buyingCenters: 'Procurement, Operations',
    buyingTriggers: 'Scrap reduction, safety',
    qualificationSwitchingBehavior: 'Risk factors, approval cycles',
    procurementPatterns: 'Weekly orders, vendor consolidation',
    channelMix: 'E-commerce (25%), Industrial Distribution (75%)',
    customerPrioritization: 'Spec complexity, high-value',
    keyContactPerson: 'Nils Andersen',
    designation: 'Managing Director',
    emailAddress: 'n.andersen@qatalum.com',
    phoneNumber: '+974 4423 9000',
    websiteUrl: 'www.qatalum.com'
  },
  {
    sNo: 19,
    customerName: 'Saudi Kayan Petrochemical',
    customerType: 'Converters',
    buyingCenters: 'Plant, Quality',
    buyingTriggers: 'Cut quality, uptime',
    qualificationSwitchingBehavior: 'Trial process, spec validation',
    procurementPatterns: 'Quarterly orders, inventory practices',
    channelMix: 'Direct (90%), E-commerce (10%)',
    customerPrioritization: 'Volume, repeatability',
    keyContactPerson: 'Turki Al-Shehri',
    designation: 'Plant Director',
    emailAddress: 't.shehri@saudikayan.com',
    phoneNumber: '+966 13 357 0000',
    websiteUrl: 'www.saudikayan.com'
  },
  {
    sNo: 20,
    customerName: 'Ras Al Khaimah Ceramics',
    customerType: 'Finishing Houses',
    buyingCenters: 'Operations, Procurement',
    buyingTriggers: 'Safety, standardization',
    qualificationSwitchingBehavior: 'Approval cycles, risk factors',
    procurementPatterns: 'Monthly orders, vendor consolidation',
    channelMix: 'Industrial Distribution (55%), Direct (45%)',
    customerPrioritization: 'Premium potential, spec complexity',
    keyContactPerson: 'Mariam Al-Qasimi',
    designation: 'Procurement Director',
    emailAddress: 'm.qasimi@rakceramics.com',
    phoneNumber: '+971 7 244 6666',
    websiteUrl: 'www.rakceramics.com'
  },
  {
    sNo: 21,
    customerName: 'Gulf Petrochemical Industries',
    customerType: 'Converters',
    buyingCenters: 'Quality, Operations',
    buyingTriggers: 'Uptime, scrap reduction',
    qualificationSwitchingBehavior: 'Spec validation, trial process',
    procurementPatterns: 'Bi-weekly orders, inventory practices',
    channelMix: 'OEM/Integrator (40%), Direct (60%)',
    customerPrioritization: 'High-value, volume',
    keyContactPerson: 'Jamal Al-Doseri',
    designation: 'Technical Director',
    emailAddress: 'j.doseri@gpic.com',
    phoneNumber: '+973 1773 1777',
    websiteUrl: 'www.gpic.com'
  },
  {
    sNo: 22,
    customerName: 'Industries Qatar',
    customerType: 'Finishing Houses',
    buyingCenters: 'Plant, Procurement',
    buyingTriggers: 'Cut quality, safety',
    qualificationSwitchingBehavior: 'Risk factors, approval cycles',
    procurementPatterns: 'Weekly orders, vendor consolidation',
    channelMix: 'Direct (70%), Industrial Distribution (30%)',
    customerPrioritization: 'Repeatability, premium potential',
    keyContactPerson: 'Abdulrahman Al-Kuwari',
    designation: 'CEO',
    emailAddress: 'a.kuwari@ikiw.com',
    phoneNumber: '+974 4432 3000',
    websiteUrl: 'www.ikiw.com'
  },
  {
    sNo: 23,
    customerName: 'Sharjah Cement Factory',
    customerType: 'Converters',
    buyingCenters: 'Operations, Quality',
    buyingTriggers: 'Standardization, uptime',
    qualificationSwitchingBehavior: 'Trial process, spec validation',
    procurementPatterns: 'Monthly orders, inventory practices',
    channelMix: 'E-commerce (15%), Direct (85%)',
    customerPrioritization: 'Spec complexity, high-value',
    keyContactPerson: 'Tariq Al-Shamsi',
    designation: 'Operations Manager',
    emailAddress: 't.shamsi@sharjahcement.com',
    phoneNumber: '+971 6 533 8888',
    websiteUrl: 'www.sharjahcement.com'
  },
  {
    sNo: 24,
    customerName: 'National Cement Company (Oman)',
    customerType: 'Finishing Houses',
    buyingCenters: 'Procurement, Plant',
    buyingTriggers: 'Scrap reduction, cut quality',
    qualificationSwitchingBehavior: 'Approval cycles, risk factors',
    procurementPatterns: 'Quarterly orders, vendor consolidation',
    channelMix: 'Industrial Distribution (45%), OEM/Integrator (55%)',
    customerPrioritization: 'Volume, repeatability',
    keyContactPerson: 'Hamad Al-Harthi',
    designation: 'General Manager',
    emailAddress: 'h.harthi@ncc.om',
    phoneNumber: '+968 2449 1000',
    websiteUrl: 'www.ncc.om'
  },
  {
    sNo: 25,
    customerName: 'Borouge (Abu Dhabi Polymers)',
    customerType: 'Converters',
    buyingCenters: 'Quality, Plant',
    buyingTriggers: 'Safety, uptime',
    qualificationSwitchingBehavior: 'Spec validation, trial process',
    procurementPatterns: 'Bi-weekly orders, inventory practices',
    channelMix: 'Direct (80%), E-commerce (20%)',
    customerPrioritization: 'Premium potential, spec complexity',
    keyContactPerson: 'Erik Holmstrom',
    designation: 'VP Manufacturing',
    emailAddress: 'e.holmstrom@borouge.com',
    phoneNumber: '+971 2 607 0000',
    websiteUrl: 'www.borouge.com'
  },
  {
    sNo: 26,
    customerName: 'Fertil (Ruwais Fertilizer)',
    customerType: 'Finishing Houses',
    buyingCenters: 'Operations, Procurement',
    buyingTriggers: 'Cut quality, standardization',
    qualificationSwitchingBehavior: 'Risk factors, approval cycles',
    procurementPatterns: 'Monthly orders, vendor consolidation',
    channelMix: 'OEM/Integrator (50%), Direct (50%)',
    customerPrioritization: 'High-value, volume',
    keyContactPerson: 'Sultan Al-Dhaheri',
    designation: 'Plant Manager',
    emailAddress: 's.dhaheri@fertil.ae',
    phoneNumber: '+971 2 603 5000',
    websiteUrl: 'www.fertil.ae'
  }
]

interface CustomerIntelligenceDatabaseProps {
  title?: string
  height?: number
}

export default function CustomerIntelligenceDatabase({ title, height = 600 }: CustomerIntelligenceDatabaseProps) {

  // Preposition 1 Table - Customer Information + Contact Details
  const renderPreposition1Table = () => (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse">
        <thead>
          <tr>
            <th colSpan={9} className="bg-[#FFFFCC] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Customer Information
            </th>
            <th colSpan={5} className="bg-[#E6CCE6] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Contact Details
            </th>
          </tr>
          <tr className="bg-gray-100">
            <th className="bg-[#CCE5FF] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Sr. No.</th>
            <th className="bg-[#CCE5FF] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Customer Name</th>
            <th className="bg-[#CCE5FF] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[150px]">
              <div>Customer Type</div>
              <div className="font-normal text-[10px] text-gray-600">(e.g., Converters, Finishing Houses)</div>
            </th>
            <th className="bg-[#CCE5FF] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[150px]">
              <div>Buying Centers</div>
              <div className="font-normal text-[10px] text-gray-600">(e.g., Plant, Procurement, Quality, Operations)</div>
            </th>
            <th className="bg-[#CCE5FF] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[180px]">
              <div>Buying Triggers</div>
              <div className="font-normal text-[10px] text-gray-600">(e.g., What drives purchase: uptime, scrap reduction, cut quality, safety, standardization)</div>
            </th>
            <th className="bg-[#CCE5FF] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[180px]">
              <div>Qualification & Switching Behavior</div>
              <div className="font-normal text-[10px] text-gray-600">(e.g., Trial process, approval cycles, spec validation, risk factors)</div>
            </th>
            <th className="bg-[#CCE5FF] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[180px]">
              <div>Procurement Patterns</div>
              <div className="font-normal text-[10px] text-gray-600">(e.g., Typical order frequency, inventory practices, vendor consolidation behavior)</div>
            </th>
            <th className="bg-[#CCE5FF] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[200px]">
              <div>Channel Mix</div>
              <div className="font-normal text-[10px] text-gray-600">(e.g., Direct vs Industrial Distribution vs OEM/Integrator vs E-commerce, split by region)</div>
            </th>
            <th className="bg-[#CCE5FF] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[200px]">
              <div>Customer Prioritization</div>
              <div className="font-normal text-[10px] text-gray-600">(e.g., High-value account criteria like volume, spec complexity, repeatability, premium potential)</div>
            </th>
            <th className="bg-[#D4EDDA] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Key Contact Person</th>
            <th className="bg-[#D4EDDA] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Designation/Role</th>
            <th className="bg-[#D4EDDA] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Email Address</th>
            <th className="bg-[#D4EDDA] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Phone/WhatsApp Number</th>
            <th className="bg-[#D4EDDA] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Website URL</th>
          </tr>
        </thead>
        <tbody>
          {sampleCustomerData.map((customer, index) => (
            <tr key={customer.sNo} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black text-center">{customer.sNo}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.customerName}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.customerType}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.buyingCenters}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.buyingTriggers}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.qualificationSwitchingBehavior}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.procurementPatterns}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.channelMix}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.customerPrioritization}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.keyContactPerson}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.designation}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-blue-600 hover:underline">
                <a href={`mailto:${customer.emailAddress}`}>{customer.emailAddress}</a>
              </td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.phoneNumber}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-blue-600 hover:underline">
                <a href={`https://${customer.websiteUrl}`} target="_blank" rel="noopener noreferrer">{customer.websiteUrl}</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )

  return (
    <div className="w-full">
      <h2 className="text-xl font-bold text-black mb-6">Customer Intelligence Database</h2>
      {renderPreposition1Table()}
    </div>
  )
}
