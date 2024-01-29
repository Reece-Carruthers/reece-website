import {Disclosure} from '@headlessui/react'
import {MinusIcon, PlusIcon} from '@heroicons/react/24/outline'

export default function Accordion({items}) {

    const skillsTitle = "Skills Progressed"

    return (
        <div className="bg-white">
            <div className="">
                <div className="mx-auto divide-y divide-gray-900/10">
                    <dl className="space-y-6 divide-y divide-gray-900/10">
                        {items.generalAccordion.map((item) => (
                            <Disclosure as="div" key={item.accordionTitle} className="pt-6">
                                {({open}) => (
                                    <>
                                        <dt>
                                            <Disclosure.Button
                                                className="flex w-full items-start justify-between text-left text-gray-900">
                                                <span
                                                    className="text-base font-semibold leading-7">{item.accordionTitle}</span>
                                                <span className="ml-6 flex h-7 items-center">
                          {open ? (
                              <MinusIcon className="h-6 w-6" aria-hidden="true"/>
                          ) : (
                              <PlusIcon className="h-6 w-6" aria-hidden="true"/>
                          )}
                        </span>
                                            </Disclosure.Button>
                                        </dt>
                                        <Disclosure.Panel as="dd" className="mt-2 pr-12">
                                            <p className="text-base leading-7 text-gray-600">{item.accordionText}</p>
                                        </Disclosure.Panel>
                                    </>
                                )}
                            </Disclosure>
                        ))}
                    </dl>
                    <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
                        <Disclosure as="div" key={skillsTitle} className="pt-6">
                            {({open}) => (
                                <>
                                    <dt>
                                        <Disclosure.Button
                                            className="flex w-full items-start justify-between text-left text-gray-900">
                                            <span className="text-base font-semibold leading-7">{skillsTitle}</span>
                                            <span className="ml-6 flex h-7 items-center">
                          {open ? (
                              <MinusIcon className="h-6 w-6" aria-hidden="true"/>
                          ) : (
                              <PlusIcon className="h-6 w-6" aria-hidden="true"/>
                          )}
                        </span>
                                        </Disclosure.Button>
                                    </dt>
                                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                                        {items.skills.map((skill, index) => (
                                            <p key={index} className="text-base leading-7 text-gray-600">{skill}</p>
                                        ))
                                        }
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                    </dl>
                </div>
            </div>
        </div>
    )
}
