import { InteractiveDemoWrapper } from './interactive-demo-wrapper'

// Freshworks 통합 체험 데모 (Vercel 배포)
export function FreshworksDemo() {
  return (
    <InteractiveDemoWrapper
      title="Freshworks 통합 상담원 화면 체험"
      description="실제 상담원이 사용하는 Freshworks 옴니채널 인터페이스를 직접 체험해보세요. 전화, 채팅, 이메일을 하나의 화면에서 관리할 수 있습니다."
      productName="Freshworks"
      iframeUrl="https://freshworks-demo.vercel.app/"
      previewImage="/SB-3-Omnichannel-Inbox.webp"
    />
  )
}

// 예시 2: GitHub Pages로 배포된 인터랙티브 사용
export function MondayWorkManagementDemo() {
  return (
    <InteractiveDemoWrapper
      title="Monday.com 프로젝트 보드 체험"
      description="드래그 앤 드롭으로 작업을 관리하고 팀원과 협업하는 방법을 체험해보세요."
      productName="Monday Work Management"
      iframeUrl="https://username.github.io/monday-interactive-demo/"
      previewImage="/monday-canvas.webp"
    />
  )
}

// 예시: Freshdesk 인터랙티브 (Vercel 배포)
export function FreshdeskInteractiveDemo() {
  return (
    <InteractiveDemoWrapper
      title="Freshdesk 티켓 관리 체험"
      description="실제 Freshdesk 인터페이스를 시뮬레이션으로 체험해보세요."
      productName="Freshdesk"
      iframeUrl="https://freshdesk-interactive.vercel.app/"
      previewImage="/freshworks-canvas.webp"
    />
  )
}

// 예시: Monday.com 인터랙티브 (Vercel 배포)
export function MondayInteractiveDemo() {
  return (
    <InteractiveDemoWrapper
      title="Monday.com 프로젝트 보드 체험"
      description="드래그 앤 드롭으로 작업을 관리하고 팀원과 협업하는 방법을 체험해보세요."
      productName="Monday Work Management"
      iframeUrl="https://monday-interactive.vercel.app/"
      previewImage="/monday-canvas.webp"
    />
  )
}

// 예시 3: HTML embed 사용
export function GoogleWorkspaceDemo() {
  return (
    <InteractiveDemoWrapper
      title="Google Workspace 협업 체험"
      description="실시간 문서 협업부터 화상회의까지, Google Workspace의 핵심 기능을 체험해보세요."
      productName="Google Workspace"
      embedHtml={`
        <div style="width: 100%; height: 100%; background: #f5f5f5; display: flex; align-items: center; justify-content: center;">
          <div style="text-align: center; padding: 40px;">
            <h2>Google Workspace 인터랙티브 데모</h2>
            <p>여기에 사용자가 제작한 HTML/JS 인터랙티브가 들어갑니다</p>
          </div>
        </div>
      `}
      previewImage="/google-workspace-canvas.webp"
    />
  )
}

// 예시 4: 단순한 플레이스홀더 (인터랙티브 준비 중)
export function SplashtopDemo() {
  return (
    <InteractiveDemoWrapper
      title="Splashtop 원격 접속 체험"
      description="실제 원격 접속 환경을 시뮬레이션으로 체험해보세요."
      productName="Splashtop"
      // 인터랙티브가 준비되면 여기에 추가
      previewImage="/splashtop-canvas.webp"
    />
  )
}