const structure = [
    {
      'folder': true,
      'title': 'Films',
      'children': [
        {
          'title': 'Iron Man.avi'
        },
        {
          'folder': true,
          'title': 'Fantasy',
          'children': [
            {
              'title': 'The Lord of the Rings.avi'
            },
            {
              'folder': true,
              'title': 'New folder 1',
              'children': false
            }
          ]
        }
      ]
    },
    {
      'folder': true,
      'title': 'Documents',
      'children': [
        {
          'folder': true,
          'title': 'EPAM Homework answers',
          'children': null
        }
      ]
    }
];

const rootNode = document.getElementById('root');

let timesClickedEpamHWAnswers = 0;
let timesClickedEpamHWFolder = 0;

window.onload = function() {
    let svg1 = this.document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    let svg2 = this.document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg1.tagName = 'svg1';
    svg2.tagName = 'svg2';
    svg1.setAttribute('d', './material-icons/MaterialIcons-Regular.svg');
    svg2.setAttribute('d', './material-icons/MaterialIcons-Regular.svg');

    let timesClickedFirstFolder = 0;
    let timesClickedFantasyFolder = 0;
    let timesClickedNewFolder = 0;
    
    
    const firstFolderDiv = this.document.createElement('first-folder-div');
    firstFolderDiv.id = 'first-folder-id';
    const firstFolderText = this.document.createTextNode(structure[0].title); 
    firstFolderDiv.appendChild(svg1);
    firstFolderDiv.appendChild(firstFolderText);
    rootNode.appendChild(firstFolderDiv);

    const secondFolderDiv = this.document.createElement('second-folder-div');
    secondFolderDiv.id = 'second-folder-id';
    const secondFolderText = this.document.createTextNode(structure[1].title);
    secondFolderDiv.appendChild(svg2);
    secondFolderDiv.appendChild(secondFolderText);
    rootNode.appendChild(secondFolderDiv);
    let divByTwo = 2;
    this.document.getElementById('first-folder-id').addEventListener('click', () => {
      if(timesClickedFirstFolder % divByTwo === 0) {
        let ironManAviFile = this.document.createElement('iron-man-avi');
      ironManAviFile.id = 'iron-man-avi-id';
      const ironManAviFileText = this.document.createTextNode(structure[0].children[0].title);
      let fantasyFolder = this.document.createElement('fantasy-folder');
      fantasyFolder.id = 'fantasy-folder-id';
      const fantasyFolderText = this.document.createTextNode(structure[0].children[1].title);
      firstFolderDiv.appendChild(ironManAviFile);
      ironManAviFile.appendChild(ironManAviFileText);
      firstFolderDiv.appendChild(fantasyFolder);
      fantasyFolder.appendChild(fantasyFolderText);
      this.document.getElementById('fantasy-folder-id').addEventListener('click', () => {
        if(timesClickedFantasyFolder % divByTwo === 0) {
          this.event.stopPropagation(); 
          let lordOfTheRings = this.document.createElement('lord-of-the-rings');
          lordOfTheRings.id = 'lord-of-the-rings-id';
          const lordOfTheRingsAviFileText = this.document.createTextNode(structure[0].children[1].children[0].title);
          lordOfTheRings.appendChild(lordOfTheRingsAviFileText);
          let newFolder = this.document.createElement('new-folder-1');
          newFolder.id = 'new-folder-id';
          const newFolderText = this.document.createTextNode(structure[0].children[1].children[1].title);
          firstFolderDiv.appendChild(lordOfTheRings);
          lordOfTheRings.appendChild(lordOfTheRingsAviFileText);
          firstFolderDiv.appendChild(newFolder);
          newFolder.appendChild(newFolderText);
          this.document.getElementById('new-folder-id').addEventListener('click', () => {
            if(timesClickedNewFolder % divByTwo === 0) {
              this.event.stopPropagation();
              let folderIsEmptyElem = this.document.createElement('first-empty-folder');
              let folderIsEmptyElemText = this.document.createTextNode('Folder is empty');
              newFolder.appendChild(folderIsEmptyElem);
              folderIsEmptyElem.appendChild(folderIsEmptyElemText);
            } else if (timesClickedNewFolder % divByTwo === 1) {
              let node2 = this.document.getElementById('new-folder-id')
              node2.querySelectorAll('*').forEach(n => n.remove());
            }
            timesClickedNewFolder++;
            
          });
        } else if (timesClickedFantasyFolder % divByTwo === 1) {
          let node3 = this.document.getElementById('new-folder-id');
          node3.querySelectorAll('*').forEach(n => n.remove());
        }
        timesClickedFantasyFolder++;
        
      });
      } else if (timesClickedFirstFolder % divByTwo === 1) {
        let node4 = this.document.getElementById('first-folder-id');
        node4.querySelectorAll('*').forEach(n => n.remove());
      }
      timesClickedFirstFolder++;
      
    });
    

    this.document.getElementById('second-folder-id').addEventListener('click', () => {
      if(timesClickedEpamHWFolder % divByTwo === 0) {
        let epamAnswersFolder = this.document.createElement('epam-homework-answers');
        epamAnswersFolder.id = 'epam-homework-answers-id';
        const epamAnswersFolderText = this.document.createTextNode(structure[1].children[0].title);
        epamAnswersFolder.appendChild(epamAnswersFolderText);
        secondFolderDiv.appendChild(epamAnswersFolder);
        this.document.getElementById('epam-homework-answers-id').addEventListener('click', () => {
          if(timesClickedEpamHWAnswers % divByTwo === 0) {
            this.event.stopPropagation(); 
            let folderIsEmptyElem = this.document.createElement('empty-folder');
            let folderIsEmptyText = this.document.createTextNode('Folder is empty');
            folderIsEmptyText.id = 'empty-folder-text-id';
            secondFolderDiv.appendChild(folderIsEmptyElem);
            folderIsEmptyElem.appendChild(folderIsEmptyText);
          } else if(timesClickedEpamHWAnswers % divByTwo === 1) {
              let node1 = this.document.getElementById('epam-homework-answers-id');
              while(node1.hasChildNodes()) {
                node1.removeChild(node1.firstChild);
              }
          }
          timesClickedEpamHWAnswers++; 
        });
      } else if(timesClickedEpamHWFolder % divByTwo === 1) {
        let node = this.document.getElementById('second-folder-id');
        node.querySelectorAll('*').forEach(n => n.remove());
      }
      timesClickedEpamHWFolder++;
    });
}