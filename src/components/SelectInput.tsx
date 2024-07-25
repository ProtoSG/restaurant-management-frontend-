import Select, { SingleValue } from 'react-select';

interface SelectInputProps {
  options: { value: number, label: string }[]
  onChange: (selectedOption: any) => void
  id: number
}

export default function SelectInput({ options, onChange, id }: SelectInputProps) {
  return (
    <Select
      className="w-full bg-bg-100 text-white rounded-lg "
      classNamePrefix="text-white"
      value={options.find(option => option.value === id)}
      options={options}
      onChange={onChange}
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
