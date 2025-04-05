"use client";

import { formatNumber } from "@/helpers/format-number";
import { Label, ToggleSwitch } from "flowbite-react";
import type { ComponentProps } from "react";
import { useState } from "react";
import {
  HiChat,
  HiCreditCard,
  HiCube,
  HiEmojiHappy,
  HiFire,
  HiPaperAirplane,
  HiPresentationChartBar,
  HiShieldCheck,
} from "react-icons/hi";
import { twMerge } from "tailwind-merge";

const BENEFITS: PricingCardBenefit[] = [
  {
    icon: HiCreditCard,
    title: "Digital Tools To Grow Your Business",
  },
  {
    icon: HiEmojiHappy,
    title: "No Hidden Fees Ever",
  },
  {
    icon: HiShieldCheck,
    title: "Compliance With Best Practices",
  },
  {
    icon: HiPaperAirplane,
    title: "Free Visibility Audit Included",
  },
  {
    icon: HiFire,
    title: "Automated Marketing Tools",
  },
  {
    icon: HiPresentationChartBar,
    title: "Monthly Performance Reports",
  },
  {
    icon: HiChat,
    title: "Priority Support Available",
  },
  {
    icon: HiCube,
    title: "Advanced Integrations Supported",
  },
];

export function PricingPlan() {
  const [isYearly, setYearly] = useState(false);

  return (
    <>
      <h1 className="mb-3 text-3xl font-bold text-gray-900 sm:text-5xl sm:leading-none sm:tracking-tight dark:text-white">
        Plans For Local Businesses
      </h1>
      <p className="mb-6 text-lg font-normal text-gray-500 sm:text-xl dark:text-gray-400">
        Fascinante Digital helps businesses improve their visibility, automate
        marketing, and convert more clients — choose the right plan for your
        growth.
      </p>
      <div className="flex items-center">
        <span
          className={twMerge(
            "text-base font-medium text-gray-500 dark:text-gray-400",
            !isYearly && "text-gray-900 dark:text-white",
          )}
        >
          Monthly
        </span>
        <div>
          <Label
            htmlFor="yearly"
            className="relative mx-4 flex cursor-pointer items-center"
          >
            <ToggleSwitch
              checked={isYearly}
              id="yearly"
              name="yearly"
              onChange={() => setYearly((state) => !state)}
            />
          </Label>
        </div>
        <span
          className={twMerge(
            "text-base font-medium text-gray-500 dark:text-gray-400",
            isYearly && "text-gray-900 dark:text-white",
          )}
        >
          Yearly
        </span>
      </div>
      <section className="grid grid-cols-1 space-y-12 pt-9 lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
        <PricingCard
          title="Starter Plan"
          price={{
            type: isYearly ? "yearly" : "monthly",
            monthly: 49,
            yearly: 49 * 12,
            currency: "$",
          }}
          description="Ideal for local businesses starting out. No website included."
          benefits={BENEFITS.map((benefit, index) => ({
            ...benefit,
            ...(index > 1 && { disabled: true }),
          }))}
          href="#starter"
        />
        <PricingCard
          title="Professional Plan"
          price={{
            type: isYearly ? "yearly" : "monthly",
            monthly: 99,
            yearly: 99 * 12,
            currency: "$",
          }}
          description="Includes a high-converting one-page website and a free audit."
          benefits={BENEFITS.map((benefit, index) => ({
            ...benefit,
            ...(index > 3 && { disabled: true }),
          }))}
          href="#professional"
        />
        <PricingCard
          title="Growth Plan"
          price={{
            type: isYearly ? "yearly" : "monthly",
            monthly: 200,
            yearly: 200 * 12,
            currency: "$",
          }}
          description="Website plus marketing automation. Everything included."
          benefits={BENEFITS}
          href="#growth"
        />
      </section>
    </>
  );
}

interface PricingCardProps {
  title: string;
  price: {
    type: "monthly" | "yearly";
    monthly: number;
    yearly: number;
    currency: string;
  };
  description: string;
  benefits: PricingCardBenefit[];
  href: string;
}

function PricingCard({
  title,
  price,
  description,
  benefits,
  href,
}: PricingCardProps) {
  return (
    <div className="flex flex-col rounded-lg bg-white p-6 shadow xl:p-8 dark:bg-gray-800">
      <div className="flex-1">
        <h3 className="mb-4 text-2xl font-semibold text-gray-500 dark:text-gray-400">
          {title}
        </h3>
        <div className="mb-4 flex items-baseline text-gray-900 dark:text-white">
          <span className="text-3xl font-semibold dark:text-white">
            {price.currency}
          </span>
          <span className="text-5xl font-extrabold tracking-tight dark:text-white">
            {formatNumber(price[price.type])}
          </span>
          <span className="ml-1 text-2xl font-normal text-gray-500 dark:text-gray-400">
            {price.type === "monthly" && "/month"}
            {price.type === "yearly" && "/year"}
          </span>
        </div>
        <p className="text-lg font-normal text-gray-500 dark:text-gray-400">
          {description}
        </p>
        <ul className="my-6 space-y-4">
          {benefits.map((benefit) => (
            <PricingCardBenefit key={benefit.title} {...benefit} />
          ))}
        </ul>
      </div>
      <a
        href={href}
        className="rounded-lg bg-primary-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
      >
        Choose Plan
      </a>
    </div>
  );
}

interface PricingCardBenefit {
  icon: React.FC<ComponentProps<"svg">>;
  title: string;
  disabled?: boolean;
}

function PricingCardBenefit({
  icon: Icon,
  title,
  disabled,
}: PricingCardBenefit) {
  return (
    <li
      className={twMerge(
        "flex space-x-3",
        disabled && "line-through decoration-gray-500",
      )}
    >
      <Icon
        className={twMerge(
          "h-5 w-5 shrink-0 text-green-400",
          disabled && "text-gray-400 dark:text-gray-500",
        )}
      />
      <span
        className={twMerge(
          "text-base font-normal text-gray-500 dark:text-gray-400",
          disabled && "text-gray-500 dark:text-gray-500",
        )}
      >
        {title}
      </span>
    </li>
  );
}
