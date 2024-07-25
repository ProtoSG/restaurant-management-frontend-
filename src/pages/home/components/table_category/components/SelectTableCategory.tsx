import Select, { SingleValue } from 'react-select';
import { useEffect, useState } from "react";
import { useTableCategoryId } from '../../../hooks/useTableCategoryId';
import { TableCategory } from '../../../../../models/TableCategory.model';
import SelectInput from '../../../../../components/SelectInput';

interface TableCategoryOption {
  value: number;
  label: string;
}

interface SelectTableCategoryProps {
  tableCategories: TableCategory[]
}


export default function SelectTableCategory({ tableCategories }: SelectTableCategoryProps) {
  const setId = useTableCategoryId(set => set.setId);
  const id = useTableCategoryId(set => set.id);

  useEffect(() => {
    if (tableCategories.length > 0) {
      const defaultId = tableCategories[0]?.id;
      setId(defaultId);
    }
  }, [tableCategories, setId]);


  const handleChangeId = (selectedOption: SingleValue<TableCategoryOption>) => {
    if (selectedOption) {
      const id = selectedOption.value;
      setId(id);
    }
  };

  const options = tableCategories.map(tableCategory => ({
    value: tableCategory.id,
    label: tableCategory.name,
  }));

  return (
    <SelectInput
      options={options}
      onChange={handleChangeId}
      id={id}
    />

  )
}
