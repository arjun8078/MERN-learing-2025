import { useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export function NotesApp() {
  // Change this line to use localStorage
  const [notes, setNotes] = useLocalStorage('notes', []);
  
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [editingId, setEditingId] = useState(null); // Fixed typo
  const [searchTerm, setSearchTerm] = useState('');

  const addNote = () => {
    if (!title.trim() || !content.trim()) {
      alert('Please fill in both title and content');
      return;
    }

    const newNote = {
      id: Date.now(),
      title: title.trim(),
      content: content.trim(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }

    setNotes([newNote, ...notes]); // Add new notes at the top

    setTitle('');
    setContent('');
  }

  const deleteNote = (id) => {
    if (window.confirm('Are you sure you want to delete this note?')) {
      setNotes(notes.filter(note => note.id !== id));
    }
  }

  const startEdit = (note) => {
    setEditingId(note.id);
    setTitle(note.title);
    setContent(note.content);
  }

  const updateNote = () => {
    if (!title.trim() || !content.trim()) {
      alert('Please fill in both title and content');
      return;
    }

    setNotes(notes.map(note => 
      note.id === editingId 
        ? { 
            ...note, 
            title: title.trim(), 
            content: content.trim(),
            updatedAt: new Date().toISOString() // Update timestamp
          }
        : note
    ));

    setTitle('');
    setContent('');
    setEditingId(null);
  }

  const cancelEdit = () => {
    setEditingId(null);
    setTitle('');
    setContent('');
  };

  const clearAllNotes = () => {
    if (window.confirm('Delete ALL notes? This cannot be undone!')) {
      setNotes([]);
    }
  };

  const filteredNotes = notes.filter(note =>
    note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    note.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Format date nicely
  const formatDate = (isoString) => {
    const date = new Date(isoString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div style={{
      padding: '20px',
      maxWidth: '900px',
      margin: '0 auto',
      fontFamily: 'system-ui',
      backgroundColor: '#f5f5f5',
      minHeight: '100vh'
    }}>
      {/* Header */}
      <header style={{
        textAlign: 'center',
        padding: '30px',
        backgroundColor: '#673AB7',
        color: 'white',
        borderRadius: '12px',
        marginBottom: '30px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
      }}>
        <h1 style={{ margin: '0 0 10px 0', fontSize: '36px' }}>
          📝 My Notes App
        </h1>
        <p style={{ margin: 0, opacity: 0.9, fontSize: '16px' }}>
          Complete CRUD with localStorage persistence
        </p>
      </header>

      {/* Input Form */}
      <div style={{
        backgroundColor: 'white',
        padding: '30px',
        borderRadius: '12px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        marginBottom: '30px'
      }}>
        <h2 style={{ marginTop: 0, color: '#333' }}>
          {editingId ? '✏️ Edit Note' : '➕ Create New Note'}
        </h2>

        <div style={{ marginBottom: '15px' }}>
          <label style={{
            display: 'block',
            marginBottom: '8px',
            fontWeight: '600',
            color: '#555'
          }}>
            Title
          </label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="Enter note title..."
            style={{
              width: '100%',
              padding: '12px',
              fontSize: '16px',
              border: '2px solid #ddd',
              borderRadius: '6px',
              outline: 'none',
              transition: 'border-color 0.3s'
            }}
            onFocus={(e) => e.target.style.borderColor = '#673AB7'}
            onBlur={(e) => e.target.style.borderColor = '#ddd'}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label style={{
            display: 'block',
            marginBottom: '8px',
            fontWeight: '600',
            color: '#555'
          }}>
            Content
          </label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Write your note here..."
            rows="5"
            style={{
              width: '100%',
              padding: '12px',
              fontSize: '16px',
              border: '2px solid #ddd',
              borderRadius: '6px',
              outline: 'none',
              fontFamily: 'inherit',
              resize: 'vertical',
              transition: 'border-color 0.3s'
            }}
            onFocus={(e) => e.target.style.borderColor = '#673AB7'}
            onBlur={(e) => e.target.style.borderColor = '#ddd'}
          />
          <p style={{
            textAlign: 'right',
            fontSize: '14px',
            color: '#999',
            marginTop: '5px',
            marginBottom: 0
          }}>
            {content.length} characters
          </p>
        </div>

        <div style={{ display: 'flex', gap: '10px' }}>
          {editingId ? (
            <>
              <button
                onClick={updateNote}
                style={{
                  flex: 1,
                  padding: '12px 24px',
                  fontSize: '16px',
                  fontWeight: '600',
                  backgroundColor: '#4CAF50',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#45a049'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#4CAF50'}
              >
                ✅ Update Note
              </button>
              <button
                onClick={cancelEdit}
                style={{
                  flex: 1,
                  padding: '12px 24px',
                  fontSize: '16px',
                  fontWeight: '600',
                  backgroundColor: '#9E9E9E',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#757575'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#9E9E9E'}
              >
                ❌ Cancel
              </button>
            </>
          ) : (
            <button
              onClick={addNote}
              style={{
                width: '100%',
                padding: '12px 24px',
                fontSize: '16px',
                fontWeight: '600',
                backgroundColor: '#673AB7',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                transition: 'background-color 0.3s'
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#5e35b1'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#673AB7'}
            >
              ➕ Add Note
            </button>
          )}
        </div>
      </div>

      {/* Search Bar */}
      {notes.length > 0 && (
        <div style={{ marginBottom: '25px' }}>
          <input
            placeholder="🔍 Search notes by title or content..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              width: '100%',
              padding: '15px',
              fontSize: '16px',
              border: '2px solid #ddd',
              borderRadius: '8px',
              outline: 'none',
              transition: 'border-color 0.3s'
            }}
            onFocus={(e) => e.target.style.borderColor = '#673AB7'}
            onBlur={(e) => e.target.style.borderColor = '#ddd'}
          />
        </div>
      )}

      {/* Notes Header */}
      {notes.length > 0 && (
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '20px'
        }}>
          <h2 style={{ margin: 0, color: '#333' }}>
            📚 Your Notes ({filteredNotes.length})
          </h2>
          <button
            onClick={clearAllNotes}
            style={{
              padding: '8px 16px',
              fontSize: '14px',
              fontWeight: '600',
              backgroundColor: '#f44336',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              transition: 'background-color 0.3s'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#d32f2f'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#f44336'}
          >
            🗑️ Clear All
          </button>
        </div>
      )}

      {/* Notes List */}
      {filteredNotes.length === 0 ? (
        <div style={{
          textAlign: 'center',
          padding: '60px 20px',
          backgroundColor: 'white',
          borderRadius: '12px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
        }}>
          {searchTerm ? (
            <>
              <p style={{ fontSize: '64px', margin: '0 0 10px 0' }}>🔍</p>
              <h3 style={{ color: '#666', margin: '0 0 10px 0' }}>
                No notes found
              </h3>
              <p style={{ color: '#999' }}>
                Try a different search term
              </p>
            </>
          ) : (
            <>
              <p style={{ fontSize: '64px', margin: '0 0 10px 0' }}>📝</p>
              <h3 style={{ color: '#666', margin: '0 0 10px 0' }}>
                No notes yet
              </h3>
              <p style={{ color: '#999' }}>
                Create your first note above!
              </p>
            </>
          )}
        </div>
      ) : (
        <div style={{
          display: 'grid',
          gap: '20px'
        }}>
          {filteredNotes.map((note) => (
            <div
              key={note.id}
              style={{
                backgroundColor: 'white',
                padding: '25px',
                borderRadius: '12px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                transition: 'transform 0.2s, box-shadow 0.2s',
                border: editingId === note.id ? '2px solid #673AB7' : '2px solid transparent'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
              }}
            >
              <h3 style={{
                margin: '0 0 10px 0',
                color: '#333',
                fontSize: '22px'
              }}>
                {note.title}
              </h3>

              <p style={{
                margin: '0 0 15px 0',
                color: '#666',
                lineHeight: '1.6',
                fontSize: '15px',
                whiteSpace: 'pre-wrap'
              }}>
                {note.content}
              </p>

              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingTop: '15px',
                borderTop: '1px solid #eee'
              }}>
                <div style={{ fontSize: '13px', color: '#999' }}>
                  <div>📅 Created: {formatDate(note.createdAt)}</div>
                  {note.updatedAt !== note.createdAt && (
                    <div>✏️ Updated: {formatDate(note.updatedAt)}</div>
                  )}
                </div>

                <div style={{ display: 'flex', gap: '8px' }}>
                  <button
                    onClick={() => startEdit(note)}
                    style={{
                      padding: '8px 16px',
                      fontSize: '14px',
                      fontWeight: '600',
                      backgroundColor: '#2196F3',
                      color: 'white',
                      border: 'none',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      transition: 'background-color 0.3s'
                    }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = '#1976D2'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = '#2196F3'}
                  >
                    ✏️ Edit
                  </button>

                  <button
                    onClick={() => deleteNote(note.id)}
                    style={{
                      padding: '8px 16px',
                      fontSize: '14px',
                      fontWeight: '600',
                      backgroundColor: '#f44336',
                      color: 'white',
                      border: 'none',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      transition: 'background-color 0.3s'
                    }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = '#d32f2f'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = '#f44336'}
                  >
                    🗑️ Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Tips Section */}
      {notes.length > 0 && (
        <div style={{
          marginTop: '30px',
          padding: '20px',
          backgroundColor: '#E3F2FD',
          borderRadius: '8px',
          borderLeft: '4px solid #2196F3'
        }}>
          <p style={{ margin: 0, color: '#1565C0' }}>
            💡 <strong>Tip:</strong> Your notes are automatically saved to localStorage. 
            Try refreshing the page - they'll still be here!
          </p>
        </div>
      )}
    </div>
  );
}