// Health Records Management System
class HealthRecordsManager {
    constructor() {
        this.records = JSON.parse(localStorage.getItem('healthRecords')) || [];
        this.currentFilter = 'all';
        this.editingRecord = null;

        this.init();
    }

    init() {
        this.bindEvents();
        this.updateStats();
        this.renderRecords();
    }

    bindEvents() {
        // Modal controls
        document.getElementById('add-record-btn').addEventListener('click', () => this.openModal());
        document.getElementById('add-first-record-btn').addEventListener('click', () => this.openModal());
        document.getElementById('close-modal').addEventListener('click', () => this.closeModal());
        document.getElementById('cancel-btn').addEventListener('click', () => this.closeModal());

        // Form submission
        document.getElementById('record-form').addEventListener('submit', (e) => this.saveRecord(e));

        // Record type change
        document.getElementById('record-type').addEventListener('change', (e) => this.showRecordFields(e.target.value));

        // Filter change
        document.getElementById('record-filter').addEventListener('change', (e) => {
            this.currentFilter = e.target.value;
            this.renderRecords();
        });

        // Click outside modal to close
        document.getElementById('add-record-modal').addEventListener('click', (e) => {
            if (e.target.id === 'add-record-modal') {
                this.closeModal();
            }
        });
    }

    openModal(record = null) {
        this.editingRecord = record;
        const modal = document.getElementById('add-record-modal');
        const form = document.getElementById('record-form');
        const title = document.getElementById('modal-title');

        if (record) {
            title.textContent = 'Edit Health Record';
            this.populateForm(record);
        } else {
            title.textContent = 'Add Health Record';
            form.reset();
            this.showRecordFields(''); // Hide all fields
        }

        modal.classList.add('show');
    }

    closeModal() {
        const modal = document.getElementById('add-record-modal');
        modal.classList.remove('show');
        this.editingRecord = null;
    }

    showRecordFields(type) {
        // Hide all field groups
        document.querySelectorAll('.record-fields').forEach(field => {
            field.style.display = 'none';
        });

        // Show selected field group
        if (type) {
            document.getElementById(`${type}-fields`).style.display = 'block';
        }
    }

    populateForm(record) {
        document.getElementById('record-type').value = record.type;
        this.showRecordFields(record.type);

        // Populate fields based on record type
        switch (record.type) {
            case 'visits':
                document.getElementById('visit-date').value = record.visitDate || '';
                document.getElementById('doctor-name').value = record.doctorName || '';
                document.getElementById('specialty').value = record.specialty || '';
                document.getElementById('diagnosis').value = record.diagnosis || '';
                document.getElementById('notes').value = record.notes || '';
                break;
            case 'medications':
                document.getElementById('medication-name').value = record.medicationName || '';
                document.getElementById('dosage').value = record.dosage || '';
                document.getElementById('frequency').value = record.frequency || '';
                document.getElementById('start-date').value = record.startDate || '';
                document.getElementById('end-date').value = record.endDate || '';
                document.getElementById('prescribing-doctor').value = record.prescribingDoctor || '';
                break;
            case 'allergies':
                document.getElementById('allergen').value = record.allergen || '';
                document.getElementById('reaction').value = record.reaction || '';
                document.getElementById('severity').value = record.severity || '';
                document.getElementById('allergy-notes').value = record.allergyNotes || '';
                break;
            case 'vaccinations':
                document.getElementById('vaccine-name').value = record.vaccineName || '';
                document.getElementById('vaccination-date').value = record.vaccinationDate || '';
                document.getElementById('batch-number').value = record.batchNumber || '';
                document.getElementById('administered-by').value = record.administeredBy || '';
                break;
            case 'lab-results':
                document.getElementById('test-name').value = record.testName || '';
                document.getElementById('test-date').value = record.testDate || '';
                document.getElementById('results').value = record.results || '';
                document.getElementById('lab-name').value = record.labName || '';
                break;
        }
    }

    saveRecord(e) {
        e.preventDefault();
        console.log('Save record triggered');

        const form = e.target;
        const formData = new FormData(form);
        const recordType = formData.get('type');
        console.log('Record type:', recordType);
        console.log('Form data:', Object.fromEntries(formData));

        if (!recordType || recordType === '') {
            alert('Please select a record type');
            return;
        }

        const record = {
            id: this.editingRecord ? this.editingRecord.id : Date.now(),
            type: recordType,
            dateCreated: this.editingRecord ? this.editingRecord.dateCreated : new Date().toISOString(),
            lastModified: new Date().toISOString()
        };

        // Add type-specific data
        switch (recordType) {
            case 'visits':
                record.visitDate = formData.get('visitDate');
                record.doctorName = formData.get('doctorName');
                record.specialty = formData.get('specialty');
                record.diagnosis = formData.get('diagnosis');
                record.notes = formData.get('notes');
                break;
            case 'medications':
                record.medicationName = formData.get('medicationName');
                record.dosage = formData.get('dosage');
                record.frequency = formData.get('frequency');
                record.startDate = formData.get('startDate');
                record.endDate = formData.get('endDate');
                record.prescribingDoctor = formData.get('prescribingDoctor');
                break;
            case 'allergies':
                record.allergen = formData.get('allergen');
                record.reaction = formData.get('reaction');
                record.severity = formData.get('severity');
                record.allergyNotes = formData.get('allergyNotes');
                break;
            case 'vaccinations':
                record.vaccineName = formData.get('vaccineName');
                record.vaccinationDate = formData.get('vaccinationDate');
                record.batchNumber = formData.get('batchNumber');
                record.administeredBy = formData.get('administeredBy');
                break;
            case 'lab-results':
                record.testName = formData.get('testName');
                record.testDate = formData.get('testDate');
                record.results = formData.get('results');
                record.labName = formData.get('labName');
                break;
        }

        if (this.editingRecord) {
            const index = this.records.findIndex(r => r.id === this.editingRecord.id);
            if (index !== -1) {
                this.records[index] = record;
            }
        } else {
            this.records.push(record);
        }

        this.saveToStorage();
        this.updateStats();
        this.renderRecords();
        this.closeModal();
    }

    deleteRecord(id) {
        if (confirm('Are you sure you want to delete this health record? This action cannot be undone.')) {
            this.records = this.records.filter(record => record.id !== id);
            this.saveToStorage();
            this.updateStats();
            this.renderRecords();
        }
    }

    saveToStorage() {
        localStorage.setItem('healthRecords', JSON.stringify(this.records));
    }

    updateStats() {
        const stats = {
            visits: this.records.filter(r => r.type === 'visits').length,
            medications: this.records.filter(r => r.type === 'medications').length,
            allergies: this.records.filter(r => r.type === 'allergies').length,
            vaccinations: this.records.filter(r => r.type === 'vaccinations').length
        };

        document.getElementById('visits-count').textContent = stats.visits;
        document.getElementById('medications-count').textContent = stats.medications;
        document.getElementById('allergies-count').textContent = stats.allergies;
        document.getElementById('vaccinations-count').textContent = stats.vaccinations;
    }

    renderRecords() {
        const container = document.getElementById('records-list');
        const filteredRecords = this.currentFilter === 'all'
            ? this.records
            : this.records.filter(record => record.type === this.currentFilter);

        if (filteredRecords.length === 0) {
            if (this.records.length === 0) {
                container.innerHTML = `
                    <div class="empty-state">
                        <i class="fas fa-clipboard-list"></i>
                        <h3>No health records yet</h3>
                        <p>Start by adding your first health record to keep track of your medical history.</p>
                        <button class="btn btn-primary" id="add-first-record-btn">
                            <i class="fas fa-plus"></i> Add Your First Record
                        </button>
                    </div>
                `;
                document.getElementById('add-first-record-btn').addEventListener('click', () => this.openModal());
            } else {
                container.innerHTML = `
                    <div class="empty-state">
                        <i class="fas fa-filter"></i>
                        <h3>No records found</h3>
                        <p>No ${this.currentFilter} records match your current filter.</p>
                    </div>
                `;
            }
            return;
        }

        // Sort records by date (newest first)
        filteredRecords.sort((a, b) => new Date(b.lastModified) - new Date(a.lastModified));

        container.innerHTML = filteredRecords.map(record => this.createRecordCard(record)).join('');
    }

    createRecordCard(record) {
        const typeConfig = {
            visits: { icon: 'fa-calendar-check', label: 'Medical Visit' },
            medications: { icon: 'fa-pills', label: 'Medication' },
            allergies: { icon: 'fa-allergies', label: 'Allergy' },
            vaccinations: { icon: 'fa-syringe', label: 'Vaccination' },
            'lab-results': { icon: 'fa-flask', label: 'Lab Result' }
        };

        const config = typeConfig[record.type];
        const date = new Date(record.lastModified).toLocaleDateString();

        let content = '';

        switch (record.type) {
            case 'visits':
                content = `
                    <h4>${record.doctorName || 'Doctor'} - ${record.specialty || 'Specialty'}</h4>
                    <p><strong>Date:</strong> ${record.visitDate ? new Date(record.visitDate).toLocaleDateString() : 'Not specified'}</p>
                    ${record.diagnosis ? `<p><strong>Diagnosis:</strong> ${record.diagnosis}</p>` : ''}
                    ${record.notes ? `<p><strong>Notes:</strong> ${record.notes}</p>` : ''}
                `;
                break;
            case 'medications':
                content = `
                    <h4>${record.medicationName}</h4>
                    <p><strong>Dosage:</strong> ${record.dosage || 'Not specified'}</p>
                    <p><strong>Frequency:</strong> ${record.frequency || 'Not specified'}</p>
                    <p><strong>Start Date:</strong> ${record.startDate ? new Date(record.startDate).toLocaleDateString() : 'Not specified'}</p>
                    ${record.prescribingDoctor ? `<p><strong>Prescribed by:</strong> ${record.prescribingDoctor}</p>` : ''}
                `;
                break;
            case 'allergies':
                content = `
                    <h4>${record.allergen}</h4>
                    <p><strong>Reaction:</strong> ${record.reaction || 'Not specified'}</p>
                    <p><strong>Severity:</strong> ${record.severity || 'Not specified'}</p>
                    ${record.allergyNotes ? `<p><strong>Notes:</strong> ${record.allergyNotes}</p>` : ''}
                `;
                break;
            case 'vaccinations':
                content = `
                    <h4>${record.vaccineName}</h4>
                    <p><strong>Date:</strong> ${record.vaccinationDate ? new Date(record.vaccinationDate).toLocaleDateString() : 'Not specified'}</p>
                    ${record.batchNumber ? `<p><strong>Batch:</strong> ${record.batchNumber}</p>` : ''}
                    ${record.administeredBy ? `<p><strong>Administered by:</strong> ${record.administeredBy}</p>` : ''}
                `;
                break;
            case 'lab-results':
                content = `
                    <h4>${record.testName}</h4>
                    <p><strong>Date:</strong> ${record.testDate ? new Date(record.testDate).toLocaleDateString() : 'Not specified'}</p>
                    ${record.results ? `<p><strong>Results:</strong> ${record.results}</p>` : ''}
                    ${record.labName ? `<p><strong>Lab:</strong> ${record.labName}</p>` : ''}
                `;
                break;
        }

        return `
            <div class="record-card" data-id="${record.id}">
                <div class="record-header">
                    <div class="record-type">
                        <div class="record-type-icon">
                            <i class="fas ${config.icon}"></i>
                        </div>
                        <div class="record-type-text">${config.label}</div>
                    </div>
                    <div class="record-date">${date}</div>
                </div>
                <div class="record-content">
                    ${content}
                </div>
                <div class="record-actions">
                    <button class="btn-edit" onclick="healthRecordsManager.openModal(${JSON.stringify(record).replace(/"/g, '"')})">
                        <i class="fas fa-edit"></i> Edit
                    </button>
                    <button class="btn-delete" onclick="healthRecordsManager.deleteRecord(${record.id})">
                        <i class="fas fa-trash"></i> Delete
                    </button>
                </div>
            </div>
        `;
    }
}

// Initialize the health records manager when the page loads
let healthRecordsManager;
document.addEventListener('DOMContentLoaded', () => {
    healthRecordsManager = new HealthRecordsManager();
});
