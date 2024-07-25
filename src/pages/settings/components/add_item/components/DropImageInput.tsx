import { useCallback, useState } from "react"
import { useDropzone } from "react-dropzone"
import IconPlus from "../../../../../assets/icons/IconPlus"

export default function DropImageInput({ setFile }: { setFile: React.Dispatch<React.SetStateAction<File | null>> }) {
  const [acceptedFilesState, setAcceptedFilesState] = useState<File[]>([])

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setAcceptedFilesState(acceptedFiles)
    setFile(acceptedFiles[0])
  }, [])

  const { getRootProps, getInputProps, isDragActive, acceptedFiles } = useDropzone({ onDrop })

  const handleRemoveImage = useCallback(() => {
    setAcceptedFilesState([])
  }, [])

  return (
    <>
      {
        acceptedFilesState.length > 0
          ? <div
            onClick={handleRemoveImage}
            className="w-full flex rounded-xl relative"
          >
            <img
              src={URL.createObjectURL(acceptedFiles[0])}
              alt=""
              className="rounded-xl w-full  object-cover"
            />
            <span className="absolute transition-colors hover:cursor-pointer m-auto py-16 text-transparent hover:bg-primary/80 rounded-xl size-full text-center items-center hover:text-white text-2xl font-semibold" >
              Eliminar Imagen
            </span>
          </div>
          : <div
            {...getRootProps()}
            className="hover:cursor-pointer hover:bg-bg-200 transition-colors  border-2 border-dashed border-text/70 text-text/70 rounded-xl focus:outline-none flex flex-col items-center justify-center px-6 gap-3"
          >
            <input {...getInputProps()} />
            {
              isDragActive ? <p className="font-semibold text-sm text-pretty text-center  ">Suelta la imagen aquí</p>
                : (
                  <>
                    <IconPlus />
                    <p className="font-semibold text-sm text-pretty text-center  ">Arrastra la imagen aquí</p>
                  </>
                )
            }
          </div>
      }
    </>

  )
}
