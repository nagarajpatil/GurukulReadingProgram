import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { toast } from 'sonner'

// SharePoint Excel embed configuration
const SHAREPOINT_CONFIG = {
  embedBaseUrl: 'https://usc-excel.officeapps.live.com/x/_layouts/xlembedpreview.aspx',
  wopiSrc: 'https://gurukulweb-my.sharepoint.com/personal/nagaraj_patil_gurukul-wa_org/_vti_bin/wopi.ashx/files/53eb110dd5cd45a287328fcbc06b07dd',
  documentId: '53eb110d-d5cd-45a2-8732-8fcbc06b07dd',
  publicEmbedUrl: 'https://gurukulweb-my.sharepoint.com/personal/nagaraj_patil_gurukul-wa_org/_layouts/15/Doc.aspx',
  defaultSheet: 'All Students',
  defaultTable: 'AllStudentsTable',
  sharePointViewUrl: 'https://gurukulweb-my.sharepoint.com/:x:/g/personal/nagaraj_patil_gurukul-wa_org/EQ0R61PN1aJFhzKPy8BrB90B-uKyLj2NVIHRwoCKVRmfBQ',
}

const buildEmbedUrl = (accessToken?: string) => {
  if (accessToken) {
    const params = new URLSearchParams({
      'ui': 'en-US',
      'rs': 'en-US',
      'WOPISrc': SHAREPOINT_CONFIG.wopiSrc,
      'access_token': accessToken,
      'AllowTyping': 'True',
      'wdHideGridlines': 'True',
      'wdInConfigurator': 'True',
      'wdHideHeaders': 'True',
      'wdDownloadButton': 'False',
      'wdPrint': 'False',
      'chrome': 'False',
      'wdEmbedCode': '0',
      'wdCommandBar': 'False',
      'dchat': '1,1',
      'wdenableroaming': '1',
      'wdodb': '1',
      'wdlcid': 'en-US',
      'wdorigin': 'Other',
      'ActiveCell': `'${SHAREPOINT_CONFIG.defaultSheet}'!A1`,
      'Item': SHAREPOINT_CONFIG.defaultTable,
    })
    
    return `${SHAREPOINT_CONFIG.embedBaseUrl}?${params.toString()}`
  }
  
  const params = new URLSearchParams({
    sourcedoc: `{${SHAREPOINT_CONFIG.documentId}}`,
    action: 'embedview',
    wdHideGridlines: 'True',
    wdInConfigurator: 'True',
    wdHideHeaders: 'True',
    wdDownloadButton: 'False',
    wdPrint: 'False',
    chrome: 'False',
    wdEmbedCode: '0',
    wdCommandBar: 'False',
    ActiveCell: `'${SHAREPOINT_CONFIG.defaultSheet}'!A1`,
    Item: SHAREPOINT_CONFIG.defaultTable,
  })
  
  return `${SHAREPOINT_CONFIG.publicEmbedUrl}?${params.toString()}`
}

function App() {
  const [embedUrl] = useState(buildEmbedUrl())
  const iframeRef = useRef<HTMLIFrameElement>(null)

  return (
    <div className="min-h-screen bg-background p-4 md:p-6">
      <div className="mx-auto max-w-7xl space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-foreground">
              Gurukul Reading Program
            </h1>
            <p className="text-sm text-muted-foreground">
              View student reading conversations and progress from SharePoint
            </p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-4"
        >
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">Reading Progress Data</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="relative w-full overflow-hidden rounded-lg border bg-muted/20">
                <style>{`
                  iframe {
                    clip-path: inset(0 0 40px 0);
                    margin-bottom: -40px;
                  }
                `}</style>
                <iframe
                  ref={iframeRef}
                  src={embedUrl}
                  width="100%"
                  height="940"
                  frameBorder="0"
                  scrolling="no"
                  className="w-full"
                  title="Student Reading Progress"
                  onError={() => {
                    toast.error('Failed to load Excel embed. Please check authentication.')
                  }}
                />
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

export default App
