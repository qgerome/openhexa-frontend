import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Input from "core/components/forms/Input";
import Spinner from "core/components/Spinner";
import { useTranslation } from "next-i18next";

type SearchInputProps = {
  loading?: boolean;
  placeholder?: string;
  className?: string;
  required?: boolean;
} & Pick<React.ComponentProps<typeof Input>, "onChange" | "value" | "name">;

const SearchInput = (props: SearchInputProps) => {
  const { t } = useTranslation();
  const {
    className,
    loading,
    placeholder = t("Search..."),
    ...delegated
  } = props;
  return (
    <Input
      data-testid="search-input"
      leading={<MagnifyingGlassIcon className="h-5 text-gray-500" />}
      autoComplete="off"
      trailingIcon={loading && <Spinner size="xs" />}
      className={className}
      placeholder={placeholder}
      {...delegated}
    />
  );
};

export default SearchInput;
