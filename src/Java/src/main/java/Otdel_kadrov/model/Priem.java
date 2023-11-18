package Otdel_kadrov.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Otdel_kadrov.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: Прием
 */
@Entity(name = "IISOtdel_kadrovПрием")
@Table(schema = "public", name = "Прием")
public class Priem {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "IDсотрдника")
    private String idсотрдника;

    @Column(name = "IDдолжности")
    private String idдолжности;

    @Column(name = "IDподразделения")
    private String idподразделения;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Podrazdeleniya")
    @Convert("Podrazdeleniya")
    @Column(name = "Подразделения", length = 16, unique = true, nullable = false)
    private UUID _podrazdeleniyaid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Podrazdeleniya", insertable = false, updatable = false)
    private Podrazdeleniya podrazdeleniya;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Nachalnik")
    @Convert("Nachalnik")
    @Column(name = "Начальник", length = 16, unique = true, nullable = false)
    private UUID _nachalnikid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Nachalnik", insertable = false, updatable = false)
    private Nachalnik nachalnik;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Dolzhnosti")
    @Convert("Dolzhnosti")
    @Column(name = "Должности", length = 16, unique = true, nullable = false)
    private UUID _dolzhnostiid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Dolzhnosti", insertable = false, updatable = false)
    private Dolzhnosti dolzhnosti;


    public Priem() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getIDсотрдника() {
      return idсотрдника;
    }

    public void setIDсотрдника(String idсотрдника) {
      this.idсотрдника = idсотрдника;
    }

    public String getIDдолжности() {
      return idдолжности;
    }

    public void setIDдолжности(String idдолжности) {
      this.idдолжности = idдолжности;
    }

    public String getIDподразделения() {
      return idподразделения;
    }

    public void setIDподразделения(String idподразделения) {
      this.idподразделения = idподразделения;
    }


}