import { gql } from "@apollo/client";
import clsx from "clsx";
import Badge from "../components/Badge";
import { CountryBadge_CountryFragment } from "./CountryBadge.generated";

export type CountryBadgeProps = {
  onClick?: () => void;
  className?: string;
  country: CountryBadge_CountryFragment;
};

const CountryBadge = (props: CountryBadgeProps) => {
  const { onClick, className, country } = props;
  return (
    <Badge
      title={country.name}
      className={clsx(
        "relative flex items-center gap-1",
        "border border-gray-300 bg-gray-50",
        "hover-bg-opacity-70",
        className,
        onClick && "cursor-pointer"
      )}
    >
      <img
        alt="Country flag"
        className="absolute w-4 flex-shrink rounded-sm"
        src={country.flag}
      />
      <span className="ml-5 max-w-[20ch] truncate">{country.name}</span>
    </Badge>
  );
};

CountryBadge.fragments = {
  country: gql`
    fragment CountryBadge_country on Country {
      code
      name
      flag
    }
  `,
};

export default CountryBadge;
