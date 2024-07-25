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

const tableCategoriesLocal = [
  {
    "id": 1,
    "name": "tabl 1"
  },
  {
    "id": 2,
    "name": "tabl 2"
  },

]

export default function SelectTableCategory({ tableCategories }: SelectTableCategoryProps) {
  const setId = useTableCategoryId(set => set.setId);
  const id = useTableCategoryId(set => set.id);

  useEffect(() => {
    if (tableCategoriesLocal.length > 0) {
      const defaultId = tableCategoriesLocal[0]?.id;
      setId(defaultId);
    }
  }, [tableCategories, setId]);


  const handleChangeId = (selectedOption: SingleValue<TableCategoryOption>) => {
    if (selectedOption) {
      const id = selectedOption.value;
      setId(id);
    }
  };

  const options = tableCategoriesLocal.map(tableCategory => ({
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
