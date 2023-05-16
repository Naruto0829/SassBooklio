import { Component } from 'react'
import dynamic from 'next/dynamic'
import { useRef, useState, useEffect } from 'react'

export default function CKEditor () {
  const editorRef = useRef()
  const [ editorLoaded, setEditorLoaded ] = useState( false )
  const { CKEditor, ClassicEditor } = editorRef.current || {}

  useEffect( () => {
    editorRef.current = {
      CKEditor: require('@ckeditor/ckeditor5-react').CKEditor,
      ClassicEditor: require('@ckeditor/ckeditor5-build-classic')
    }
    setEditorLoaded(true)
  }, [] )

  return editorLoaded ? (
    <CKEditor
      editor={ ClassicEditor }
      data='<p>Hello from CKEditor 5!</p>'
      onInit={ editor => {
        // You can store the "editor" and use when it is needed.
        console.log('Editor is ready to use!', editor)
      } }
      onChange={ (event, editor ) => {
        const data = editor.getData()
        console.log( { event, editor, data } )
      } }
    />
  ) : (
    <div>Editor loading</div>
  )
}