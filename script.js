function openTab(evt, tabName) {
  // 1. Saare tab contents ko hide kar do
  let contents = document.getElementsByClassName("tab-content");
  for (let i = 0; i < contents.length; i++) {
    contents[i].classList.remove("show");
  }

  // 2. Saare buttons se "active" class hata do
  let buttons = document.getElementsByClassName("tab-btn");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("active");
  }

  // 3. Current tab ko dikhao aur button ko active karo
  document.getElementById(tabName).classList.add("show");
  evt.currentTarget.classList.add("active");
}

function switchTab(event, tabId) {
  // Saare panels ko hide karo
  const panels = document.querySelectorAll('.tab-panel');
  panels.forEach(panel => panel.classList.remove('active'));

  // Saare buttons se active class hatao
  const buttons = document.querySelectorAll('.tab-link');
  buttons.forEach(btn => btn.classList.remove('active'));

  // Current tab aur button ko active karo
  document.getElementById(tabId).classList.add('active');
  event.currentTarget.classList.add('active');
}

function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('mobile-open');
    
    // Icon change logic (Bars to X)
    const icon = document.querySelector('.menu-toggle i');
    if (sidebar.classList.contains('mobile-open')) {
        icon.classList.replace('fa-bars', 'fa-times');
    } else {
        icon.classList.replace('fa-times', 'fa-bars');
    }
}

// Mobile par link click hone ke baad sidebar band ho jaye
document.querySelectorAll('.nav-item').forEach(link => {
    link.addEventListener('click', () => {
        if(window.innerWidth <= 768) {
            toggleSidebar();
        }
    });
});