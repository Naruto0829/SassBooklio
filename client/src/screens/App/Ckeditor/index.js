import { useRef, useState, useEffect } from 'react';

export default function CKEditor () {

  const editorRef = useRef();
  const [ editorLoaded, setEditorLoaded ] = useState( false )
  const { CKEditor, ClassicEditor } = editorRef.current || {}

  useEffect( () => {
    editorRef.current = {
      CKEditor: require('@ckeditor/ckeditor5-react').CKEditor,
      ClassicEditor: require('@ckeditor/ckeditor5-build-classic'),
    }
    setEditorLoaded(true)
  }, [] );

  return editorLoaded ? (
    <CKEditor
      editor={ClassicEditor}
      onInit={editor => {}}
      onChange={ (event, editor ) => {} }
    />
  ) : (
    <div>Editor loading</div>
  )
}