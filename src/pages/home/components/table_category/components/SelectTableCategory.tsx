import Select, { SingleValue } from 'react-select';
import { useEffect, useState } from "react";
import { useTableCategoryId } from '../../../hooks/useTableCategoryId';
import { TableCategory } from '../../../../../models/TableCategory.model';

interface TableCategoryOption {
  value: number;
  label: string;
}

interface SelectTableCategoryProps {
  tableCategories: TableCategory[]
}

export default function SelectTableCategory({ tableCategories }: SelectTableCategoryProps) {
  const setId = useTableCategoryId(set => set.setId);
  const [selectedId, setSelectedId] = useState<number>(tableCategories[0]?.id || 0);

  useEffect(() => {
    if (tableCategories.length > 0) {
      const defaultId = tableCategories[0]?.id;
      setSelectedId(defaultId);
      setId(defaultId);
    }
  }, [tableCategories, setId]);


  const handleChangeId = (selectedOption: SingleValue<TableCategoryOption>) => {
    if (selectedOption) {
      const id = selectedOption.value;
      setSelectedId(id);
      setId(id);
    }
  };

  const options = tableCategories.map(tableCategory => ({
    value: tableCategory.id,
    label: tableCategory.name,
  }));

  return (
    <Select
      className="w-full bg-bg-100 text-white rounded-lg "
      classNamePrefix="text-white"
      value={options.find(option => option.value === selectedId)}
      options={options}
      onChange={handleChangeId}
      theme={(theme) => ({
        ...theme,
        colors: {
          ...theme.colors,
          primary25: "#1F1D2B",
          primary: "#393C49",
          text: "white"
        },
      })
      }
      styles={{
        control: (styles) => {
          return {
            ...styles,
            height: 48,
            backgroundColor: "#252836",
            borderColor: "#393C49",
          }
        },
        option: (styles, { isSelected }) => ({
          ...styles,
          backgroundColor: isSelected ? "#393C49" : "#252836",
        }),
        singleValue: (styles) => ({
          ...styles,
          color: 'white'
        }),
      }}
    />

  )
}
